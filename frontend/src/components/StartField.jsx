import  { useEffect, useRef } from 'react';



function StarField({ density = 'medium', showComets = true, cometCount = 3, isDark }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    const densityMap = { low: 200, medium: 300, high: 600 };
    const starCount = densityMap[density];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.borderRadius = '50%';
      star.style.backgroundColor = isDark ? '#ffffff' : '#4a5568';
      
      const sizeRand = Math.random();
      let size;
      if (sizeRand < 0.6) size = 1;
      else if (sizeRand < 0.85) size = 1.5;
      else if (sizeRand < 0.95) size = 2;
      else size = 2.5;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random() * 0.5 + 0.3;
      star.style.animation = `twinkle ${1.5 + Math.random() * 2.5}s infinite alternate ease-in-out`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.boxShadow = isDark 
        ? `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`
        : `0 0 ${size * 2}px rgba(74, 85, 104, 0.6)`;
      
      container.appendChild(star);
    }

    if (showComets) {
      for (let i = 0; i < cometCount; i++) {
        const comet = document.createElement('div');
        comet.style.position = 'absolute';
        comet.style.width = '2px';
        comet.style.height = '2px';
        comet.style.borderRadius = '50%';
        comet.style.backgroundColor = isDark ? '#fff' : '#64748b';
        comet.style.left = `${Math.random() * 20 - 10}%`;
        comet.style.top = `${Math.random() * 20 - 10}%`;
        comet.style.boxShadow = isDark
          ? '0 0 60px 30px rgba(255, 255, 255, 0.3)'
          : '0 0 60px 30px rgba(100, 116, 139, 0.2)';
        comet.style.animation = `comet 8s linear infinite`;
        comet.style.animationDelay = `${Math.random() * 6}s`;
        
        container.appendChild(comet);
      }
    }
  }, [density, showComets, cometCount, isDark]);

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }} />;
}

export default StarField;