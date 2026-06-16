import React, { useState, useEffect, useRef } from 'react';

function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const animate = () => {
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(update);
  };

  return <span className="stat-number" ref={ref}>{count}</span>;
}

export default CountUp;
