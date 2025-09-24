"use client";

import React, { useState, useEffect, useRef } from 'react';
import './digital-serenity-styles.css';

const DigitalSerenity = () => {
  const [mounted, setMounted] = useState(false);
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [scrolled, setScrolled] = useState(false);
  const wordsRef = useRef<HTMLElement[]>([]);
  const floatingElementsRef = useRef<Element[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0') || 0;
        setTimeout(() => {
          if (word) {
            const htmlWord = word as HTMLElement;
            htmlWord.style.animation = 'word-appear 0.8s ease-out forwards';
          }
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate');
    const handleMouseEnter = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = '0 0 20px rgba(203, 213, 225, 0.5)'; 
    };
    const handleMouseLeave = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = 'none'; 
    };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements);
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              const htmlEl = el as HTMLElement;
              htmlEl.style.animationPlayState = 'running';
              htmlEl.style.opacity = ''; 
            }
          }, (parseFloat((el as HTMLElement).style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #000000 50%, #1e293b 100%)',
        color: '#f1f5f9',
        fontFamily: 'monospace',
        overflow: 'hidden',
        position: 'relative',
      }}>
        
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '2.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '3s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
        </svg>

        {/* Corner Elements */}
        <div className="corner-element-animate" style={{ top: '16px', left: '16px', animationDelay: '4s' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', background: '#cbd5e1', opacity: 0.3, borderRadius: '50%' }}></div>
        </div>
        <div className="corner-element-animate" style={{ top: '16px', right: '16px', animationDelay: '4.2s' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: '#cbd5e1', opacity: 0.3, borderRadius: '50%' }}></div>
        </div>
        <div className="corner-element-animate" style={{ bottom: '16px', left: '16px', animationDelay: '4.4s' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', background: '#cbd5e1', opacity: 0.3, borderRadius: '50%' }}></div>
        </div>
        <div className="corner-element-animate" style={{ bottom: '16px', right: '16px', animationDelay: '4.6s' }}>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', background: '#cbd5e1', opacity: 0.3, borderRadius: '50%' }}></div>
        </div>

        <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
        <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>

        {/* Main Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 24px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontFamily: 'monospace',
              fontWeight: 300,
              color: '#cbd5e1',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              opacity: 0.8,
            }}>
              <span className="word-animate" data-delay="0">Высокоскоростной</span>
              <span className="word-animate" data-delay="300">спутниковый</span>
              <span className="word-animate" data-delay="600">интернет</span>
            </h2>
            <div style={{
              marginTop: '16px',
              width: '48px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)',
              opacity: 0.3,
              margin: '16px auto 0 auto',
            }}></div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '80rem', margin: '0 auto', position: 'relative' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 200,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#f8fafc',
              marginBottom: '2rem',
              fontFamily: 'monospace',
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="word-animate" data-delay="700">Старлинк</span>
                <span className="word-animate" data-delay="850">в</span>
                <span className="word-animate" data-delay="1000">Казахстане</span>
              </div>
              <div style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: 100,
                lineHeight: 1.6,
                letterSpacing: '0.05em',
                color: '#cbd5e1',
                fontFamily: 'monospace',
              }}>
                <span className="word-animate" data-delay="1400">Подключение</span>
                <span className="word-animate" data-delay="1550">и</span>
                <span className="word-animate" data-delay="1700">настройка</span>
                <span className="word-animate" data-delay="1850">за</span>
                <span className="word-animate" data-delay="2000">считанные</span>
                <span className="word-animate" data-delay="2150">минуты</span>
                <span className="word-animate" data-delay="2300">в</span>
                <span className="word-animate" data-delay="2450">любом</span>
                <span className="word-animate" data-delay="2600">уголке</span>
                <span className="word-animate" data-delay="2750">страны.</span>
              </div>
              <div style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: 100,
                lineHeight: 1.6,
                letterSpacing: '0.05em',
                color: '#cbd5e1',
                marginTop: '1rem',
                fontFamily: 'monospace',
              }}>
                <span className="word-animate" data-delay="3000">Наслаждайтесь</span>
                <span className="word-animate" data-delay="3150">стабильной</span>
                <span className="word-animate" data-delay="3300">связью</span>
                <span className="word-animate" data-delay="3450">там,</span>
                <span className="word-animate" data-delay="3600">где</span>
                <span className="word-animate" data-delay="3750">другие</span>
                <span className="word-animate" data-delay="3900">бессильны.</span>
              </div>
            </h1>
            <div style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '1px',
              background: '#cbd5e1',
              opacity: 0,
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '3.2s',
            }}></div>
            <div style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '1px',
              background: '#cbd5e1',
              opacity: 0,
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '3.4s',
            }}></div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              marginBottom: '16px',
              width: '48px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)',
              opacity: 0.3,
              margin: '0 auto 16px auto',
            }}></div>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontFamily: 'monospace',
              fontWeight: 300,
              color: '#cbd5e1',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              opacity: 0.8,
            }}>
              <span className="word-animate" data-delay="4200">Быстро,</span>
              <span className="word-animate" data-delay="4400">надежно,</span>
              <span className="word-animate" data-delay="4600">везде.</span>
            </h2>
            <div style={{
              marginTop: '24px',
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              opacity: 0,
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '4.2s',
            }}>
              <div style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%', opacity: 0.4 }}></div>
              <div style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%', opacity: 0.6 }}></div>
              <div style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%', opacity: 0.4 }}></div>
            </div>
            
            {/* CTA Button */}
            <div style={{
              marginTop: '40px',
              opacity: 0,
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '4.8s',
            }}>
              <button style={{
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
              onClick={() => alert('Форма заявки будет здесь!')}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>

        {/* Mouse Gradient */}
        <div 
          id="mouse-gradient-react"
          style={{
            width: '240px',
            height: '240px',
            filter: 'blur(40px)',
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default DigitalSerenity;
