// Vercel Serverless Function - Discord Stats API
// Fetches real-time member count and channel count from Discord API

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600'); // Cache 5 min

  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
  const GUILD_ID = process.env.DISCORD_GUILD_ID;

  if (!DISCORD_BOT_TOKEN || !GUILD_ID) {
    return res.status(500).json({
      error: 'Missing DISCORD_BOT_TOKEN or DISCORD_GUILD_ID environment variables',
      // Fallback values so the site still works
      members: 500,
      channels: 50,
      years: new Date().getFullYear() - 2016,
    });
  }

  try {
    // Fetch guild info (includes approximate member count)
    const guildRes = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );

    if (!guildRes.ok) {
      throw new Error(`Discord API error: ${guildRes.status}`);
    }

    const guild = await guildRes.json();

    // Fetch channels
    const channelsRes = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/channels`,
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );

    if (!channelsRes.ok) {
      throw new Error(`Discord Channels API error: ${channelsRes.status}`);
    }

    const channels = await channelsRes.json();

    // Count only text and voice channels (exclude categories)
    const channelCount = channels.filter(
      (ch) => ch.type === 0 || ch.type === 2 || ch.type === 5 || ch.type === 13 || ch.type === 15
    ).length;

    const memberCount = guild.approximate_member_count || guild.member_count || 500;
    const years = new Date().getFullYear() - 2016;

    return res.status(200).json({
      members: memberCount,
      channels: channelCount,
      years: years,
      online: guild.approximate_presence_count || 0,
      name: guild.name,
    });
  } catch (error) {
    console.error('Discord API error:', error.message);
    return res.status(200).json({
      members: 500,
      channels: 50,
      years: new Date().getFullYear() - 2016,
      error: error.message,
    });
  }
}
