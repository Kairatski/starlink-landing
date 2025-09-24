"use client";

import React, { useState } from 'react';
import GradientMenu from './ui/gradient-menu';

export const StarlinkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Главная', icon: '🏠', gradientFrom: '#a955ff', gradientTo: '#ea51ff' },
    { title: 'Услуги', icon: '⚙️', gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
    { title: 'Тарифы', icon: '💰', gradientFrom: '#FF9966', gradientTo: '#FF5E62' },
    { title: 'Контакты', icon: '📞', gradientFrom: '#80FF72', gradientTo: '#7EE8FA' },
    { title: 'Заказать', icon: '🚀', gradientFrom: '#ffa9c6', gradientTo: '#f434e2' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '15px 30px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Starlink KZ
          </div>
          <GradientMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 20px 0 20px',
        background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1',
          }}>
            Высокоскоростной интернет Starlink
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '400',
            marginBottom: '3rem',
            color: '#94a3b8',
            lineHeight: '1.4',
          }}>
            Подключение и настройка спутникового интернета в любом уголке Казахстана
          </h2>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <button style={{
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
            }}>
              Оставить заявку
            </button>
            
            <button style={{
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}>
              Узнать больше
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#3b82f6', marginBottom: '0.5rem' }}>150-400</div>
              <div style={{ color: '#94a3b8' }}>Мбит/с скорость</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#8b5cf6', marginBottom: '0.5rem' }}>20-50</div>
              <div style={{ color: '#94a3b8' }}>мс задержка</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#10b981', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ color: '#94a3b8' }}>покрытие КЗ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.8) 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, #ffffff, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Преимущества Starlink
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}>
            {[
              {
                icon: '🚀',
                title: 'Молниеносная скорость',
                description: 'Скорость интернета от 150 до 400 Мбит/с в любой точке Казахстана'
              },
              {
                icon: '🌍',
                title: 'Глобальное покрытие',
                description: 'Работает везде - от Алматы до самых отдаленных уголков страны'
              },
              {
                icon: '⚡',
                title: 'Быстрая установка',
                description: 'Подключение и настройка занимает менее 10 минут'
              },
              {
                icon: '🛡️',
                title: 'Надежность',
                description: 'Стабильная работа в любых погодных условиях'
              },
              {
                icon: '📱',
                title: 'Простое управление',
                description: 'Удобное мобильное приложение для контроля и настройки'
              },
              {
                icon: '💰',
                title: 'Доступные тарифы',
                description: 'Конкурентные цены без скрытых платежей'
              }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  fontSize: '1.1rem',
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'white',
          }}>
            Тарифные планы
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                name: 'Starlink для дома',
                price: '23 000',
                period: '₸/месяц',
                equipment: '795 000 ₸',
                features: [
                  'Скорость 150-400 Мбит/с',
                  'Задержка 20-50 мс',
                  'Безлимитный трафик',
                  'Поддержка 24/7',
                  'Гарантия 1 год'
                ],
                popular: false
              },
              {
                name: 'Starlink Mini',
                price: '52 000',
                period: '₸/месяц',
                equipment: 'В подарок инвертор и крепление',
                features: [
                  'Скорость до 200 Мбит/с',
                  'Работа в движении до 150 км/ч',
                  'Компактный размер',
                  'Быстрая настройка',
                  'Мобильное использование'
                ],
                popular: true
              }
            ].map((plan, index) => (
              <div
                key={index}
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '3rem',
                  border: plan.popular 
                    ? '2px solid rgba(59, 130, 246, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}>
                    Популярный
                  </div>
                )}
                
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'white',
                }}>
                  {plan.name}
                </h3>
                
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#3b82f6',
                  marginBottom: '0.5rem',
                }}>
                  {plan.price}
                  <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>{plan.period}</span>
                </div>
                
                <div style={{
                  color: '#94a3b8',
                  marginBottom: '2rem',
                  fontSize: '1.1rem',
                }}>
                  Оборудование: {plan.equipment}
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '2rem',
                }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '0.5rem 0',
                      color: '#e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '18px',
                  fontWeight: '600',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
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
                }}>
                  Заказать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Готовы подключиться?
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            marginBottom: '3rem',
            lineHeight: '1.6',
          }}>
            Оставьте заявку и мы свяжемся с вами в течение 15 минут для консультации и оформления заказа
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📞</div>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Телефон</div>
              <div style={{ color: '#3b82f6' }}>+7 708 767 3947</div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✉️</div>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Email</div>
              <div style={{ color: '#3b82f6' }}>sales@grando.kz</div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📍</div>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Адрес</div>
              <div style={{ color: '#3b82f6' }}>Алматы, Проспект Достык 105</div>
            </div>
          </div>

          <button style={{
            padding: '20px 40px',
            fontSize: '20px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
          }}>
            Оставить заявку сейчас
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        background: '#0f172a',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Starlink Kazakhstan
          </div>
          <div style={{
            color: '#94a3b8',
            marginBottom: '2rem',
          }}>
            Официальный партнер Starlink в Казахстане
          </div>
          <div style={{
            color: '#64748b',
            fontSize: '0.9rem',
          }}>
            © 2024 Starlink Kazakhstan. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};
