import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Starlink Logo */}
      <div style={{ position: 'relative' }}>
        {/* Main satellite dish */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
          
          {/* Middle ring */}
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.9"
          />
          
          {/* Inner circle */}
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="url(#gradient3)"
            opacity="0.95"
          />
          
          {/* Signal lines */}
          <path
            d="M20 20 L35 35 M80 20 L65 35 M20 80 L35 65 M80 80 L65 65"
            stroke="url(#gradient4)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          {/* Central dot */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="white"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Animated pulse effect */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: '2px solid #3b82f6',
            opacity: '0.3',
            animation: 'pulse 2s infinite',
          }}
        />
      </div>
      
      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span
          style={{
            fontSize: `${size * 0.6}px`,
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1',
            letterSpacing: '-0.5px',
          }}
        >
          Starlink
        </span>
        <span
          style={{
            fontSize: `${size * 0.3}px`,
            fontWeight: '500',
            color: '#94a3b8',
            lineHeight: '1',
            letterSpacing: '1px',
          }}
        >
          KAZAKHSTAN
        </span>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
