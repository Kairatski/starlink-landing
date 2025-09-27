"use client";

import React from 'react';
import Menu from './ui/navbar';
import type { IMenu } from './ui/navbar';

const menuItems: IMenu[] = [
  {
    id: 1,
    title: 'Главная',
    url: '#home',
  },
  {
    id: 2,
    title: 'Особенности',
    url: '#features',
  },
  {
    id: 3,
    title: 'Тарифы',
    url: '#pricing',
  },
  {
    id: 4,
    title: 'Услуги',
    url: '#services',
    dropdown: true,
    items: [
      {
        id: 41,
        title: 'Подключение',
        url: '#connection',
      },
      {
        id: 42,
        title: 'Техподдержка',
        url: '#support',
      },
      {
        id: 43,
        title: 'Настройка',
        url: '#setup',
      },
    ],
  },
  {
    id: 5,
    title: 'Контакты',
    url: '#contact',
  },
];

export function NavBarDemo() {
  return (
    <div style={{
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

        {/* Menu */}
        <div style={{ color: 'white' }}>
          <div style={{ 
            background: 'rgba(255, 0, 0, 0.3)', 
            padding: '5px', 
            fontSize: '12px',
            marginBottom: '5px'
          }}>
            DEBUG: Анимированное меню загружено
          </div>
          <Menu list={menuItems} />
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
    </div>
  );
}
