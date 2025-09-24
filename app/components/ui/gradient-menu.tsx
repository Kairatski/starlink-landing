"use client";

import React, { useState } from 'react';

const menuItems = [
  { title: 'Главная', icon: '🏠', gradientFrom: '#a955ff', gradientTo: '#ea51ff' },
  { title: 'Услуги', icon: '⚙️', gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
  { title: 'Тарифы', icon: '💰', gradientFrom: '#FF9966', gradientTo: '#FF5E62' },
  { title: 'Контакты', icon: '📞', gradientFrom: '#80FF72', gradientTo: '#7EE8FA' },
  { title: 'Заказать', icon: '🚀', gradientFrom: '#ffa9c6', gradientTo: '#f434e2' }
];

export default function GradientMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul style={{
      display: 'flex',
      gap: '12px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    }}>
        {menuItems.map(({ title, icon, gradientFrom, gradientTo }, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <li
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: 'relative',
                width: isHovered ? '140px' : '50px',
                height: '50px',
                background: 'white',
                boxShadow: isHovered
                  ? '0 8px 30px rgba(0, 0, 0, 0.25), 0 4px 15px rgba(0, 0, 0, 0.15)'
                  : '0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: isHovered ? '25px' : '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
              }}
            >
              {/* Gradient background on hover */}
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: isHovered ? '25px' : '50%',
                  background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
                  opacity: isHovered ? 1 : 0,
                  transition: 'all 0.5s ease',
                }}
              />

              {/* Blur glow */}
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  right: 0,
                  height: '100%',
                  borderRadius: isHovered ? '25px' : '50%',
                  background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
                  filter: 'blur(15px)',
                  opacity: isHovered ? 0.5 : 0,
                  zIndex: -1,
                  transition: 'all 0.5s ease',
                }}
              />

              {/* Icon */}
              <span
                style={{
                  position: 'relative',
                  zIndex: 10,
                  transition: 'all 0.5s ease',
                  fontSize: '20px',
                  color: '#6b7280',
                  transform: isHovered ? 'scale(0)' : 'scale(1)',
                }}
              >
                {icon}
              </span>

              {/* Title */}
              <span
                style={{
                  position: 'absolute',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.5s ease',
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  whiteSpace: 'nowrap',
                  transitionDelay: isHovered ? '0.15s' : '0s',
                }}
              >
                {title}
              </span>
            </li>
          );
        })}
    </ul>
  );
}
