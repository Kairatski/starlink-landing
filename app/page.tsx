"use client";

import React, { useState } from 'react';
import { NavBarDemo } from './components/navbar-demo';
import DigitalSerenity from './components/digital-serenity';

export default function Home() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заявка отправлена!\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`);
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const features = [
    { icon: '🚀', title: 'Высокая Скорость', description: 'Интернет до 400 Мбит/с для любых задач.' },
    { icon: '🌍', title: 'Глобальное Покрытие', description: 'Доступ в самых отдаленных уголках Казахстана.' },
    { icon: '⚡', title: 'Простая Установка', description: 'Подключение за минуты, без сложных настроек.' },
    { icon: '📡', title: 'Надежная Связь', description: 'Стабильный интернет в любых погодных условиях.' },
    { icon: '♾️', title: 'Безлимитный Трафик', description: 'Пользуйтесь интернетом без ограничений.' },
    { icon: '🛡️', title: 'Безопасность', description: 'Защищенное соединение для вашей конфиденциальности.' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: 'white',
      fontFamily: 'monospace',
      position: 'relative',
    }}>
      {/* Navigation */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <NavBarDemo />
      </div>

      {/* Hero Section with Animated Text */}
      <section id="home" style={{
        marginTop: '70px', // Account for fixed navbar height
        position: 'relative',
        zIndex: 5,
      }}>
        <DigitalSerenity />
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '60px',
          color: 'white',
        }}>
          Почему выбирают Старлинк?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          justifyContent: 'center',
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', color: 'white' }}>{feature.title}</h3>
              <p style={{ fontSize: '16px', color: 'white' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '60px',
          color: 'white',
        }}>
          Тарифные планы Старлинк
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}>
          {/* Home/Office Plan */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            borderRadius: '25px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '100%',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              background: 'linear-gradient(45deg, #f59e0b, #ef4444)',
              borderRadius: '15px',
              padding: '8px 15px',
              fontSize: '14px',
              fontWeight: '700',
              color: 'white',
              transform: 'rotate(10deg)',
            }}>
              Популярный
            </div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white',
            }}>
              Для Дома и Офиса
            </h3>
            <p style={{ fontSize: '18px', color: 'white', marginBottom: '10px' }}>
              Абонентская плата: <span style={{ fontWeight: '700', color: 'white' }}>от 23 000 ₸/мес</span>
            </p>
            <p style={{ fontSize: '18px', color: 'white', marginBottom: '30px' }}>
              Стоимость оборудования: <span style={{ fontWeight: '700', color: 'white' }}>795 000 ₸</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', color: 'white' }}>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Высокая скорость до 400 Мбит/с
              </li>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Идеально для стриминга и работы
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Стабильное соединение
              </li>
            </ul>
            <button style={{
              padding: '12px 25px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            onClick={() => alert('Выбран тариф "Для Дома и Офиса"')}
            >
              Выбрать тариф
            </button>
          </div>

          {/* Mobile Plan */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            maxWidth: '400px',
            width: '100%',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
          }}
          >
            <h3 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '20px',
              color: 'white',
            }}>
              Для Мобильного Использования (Mini)
            </h3>
            <p style={{ fontSize: '18px', color: 'white', marginBottom: '10px' }}>
              Абонентская плата: <span style={{ fontWeight: '700', color: 'white' }}>52 000 ₸/мес</span>
            </p>
            <p style={{ fontSize: '18px', color: 'white', marginBottom: '30px' }}>
              Работа в движении: <span style={{ fontWeight: '700', color: 'white' }}>до 150 км/ч</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', color: 'white' }}>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Идеально для путешествий
              </li>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Компактное оборудование
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#10b981', marginRight: '10px', fontSize: '20px' }}>✓</span> Быстрая установка
              </li>
            </ul>
            <button style={{
              padding: '12px 25px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            onClick={() => alert('Выбран тариф "Для Мобильного Использования"')}
            >
              Выбрать тариф
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '40px',
          color: 'white',
        }}>
          Свяжитесь с нами
        </h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
        }}>
          <input
            type="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <input
            type="tel"
            placeholder="Ваш Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <textarea
            placeholder="Ваше сообщение или вопрос"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
              resize: 'vertical',
            }}
          ></textarea>
          <button type="submit" style={{
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
          >
            Отправить заявку
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: '14px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '50px',
        position: 'relative',
        zIndex: 5,
      }}>
        <p>&copy; {new Date().getFullYear()} Старлинк KZ. Все права защищены.</p>
        <p style={{ marginTop: '10px' }}>
          Разработано с ❤️ для быстрого интернета в Казахстане.
        </p>
      </footer>
    </div>
  );
}