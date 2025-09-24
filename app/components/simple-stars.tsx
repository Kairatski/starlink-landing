"use client";

import React, { useEffect, useRef } from 'react';

export const SimpleStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Array<{x: number, y: number, radius: number, baseOpacity: number, twinkleSpeed: number}>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Generate new stars on resize
      const numStars = Math.floor((canvas.width * canvas.height) * 0.0003);
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.5 + 0.3,
          baseOpacity: Math.random() * 0.6 + 0.4,
          twinkleSpeed: Math.random() * 2 + 0.5,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
        const opacity = star.baseOpacity * twinkle;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};
