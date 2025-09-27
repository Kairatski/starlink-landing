"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import * as React from 'react'

export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
};

type MenuProps = {
  list: IMenu[];
};

const Menu = ({ list }: MenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
      <div style={{
        background: 'rgba(0, 255, 0, 0.3)',
        padding: '2px',
        fontSize: '10px',
        marginBottom: '2px'
      }}>
        DEBUG: Framer Motion Menu работает
      </div>
      <nav style={{ position: 'relative' }}>
        <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
          {list?.map((item) => {
            return (
              <li key={item.id} style={{ position: 'relative' }}>
                <motion.div
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      padding: '12px 32px',
                      textDecoration: 'none',
                      color: 'white',
                      background: 'transparent',
                    }}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    href={item?.url}
                  >
                    {item?.title}
                  </Link>
                </motion.div>
                <AnimatePresence>
                  {hovered === item?.id && !item?.dropdown && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'white',
                        transformOrigin: 'left',
                      }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {item?.dropdown && hovered === item?.id && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '100%',
                        zIndex: 1000,
                      }}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <motion.div
                        transition={{ duration: 0.2 }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        style={{
                          borderRadius: '8px',
                          marginTop: '16px',
                          display: 'flex',
                          width: '256px',
                          flexDirection: 'column',
                          background: 'rgba(15, 23, 42, 0.95)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {item?.items?.map((nav, index) => {
                          return (
                            <motion.a
                              key={`link-${nav?.id}`}
                              href={`${nav?.url}`}
                              whileHover={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                transition: { duration: 0.2 }
                              }}
                              style={{
                                width: '100%',
                                padding: '16px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                margin: '2px',
                              }}
                            >
                              {nav?.title}
                            </motion.a>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default Menu;