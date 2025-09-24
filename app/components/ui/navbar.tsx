"use client";

import React, { useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: MenuItem[];
}

interface NavBarProps {
  list: MenuItem[];
}

export default function NavBar({ list }: NavBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '0 20px',
      fontFamily: 'monospace',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Старлинк KZ
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}>
          {list.map((item) => (
            <div
              key={item.id}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.url}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '10px 0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                {item.title}
                {item.dropdown && (
                  <span style={{ marginLeft: '5px', fontSize: '12px' }}>▼</span>
                )}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && item.items && activeDropdown === item.id && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '10px 0',
                  minWidth: '200px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  animation: 'slideDown 0.3s ease',
                }}>
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={subItem.url}
                      style={{
                        display: 'block',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '12px 20px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        e.currentTarget.style.color = '#3b82f6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          Заказать
        </button>
      </div>
    </nav>
  );
}