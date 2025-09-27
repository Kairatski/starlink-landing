"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
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
      <nav style={{ position: 'relative' }}>
        <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
          {list?.map((item) => {
            return (
              <li key={item.id} style={{ position: 'relative' }}>
                <Link
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    padding: '12px 32px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'white',
                    background: hovered === item?.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  href={item?.url}
                >
                  {item?.title}
                </Link>
                {hovered === item?.id && !item?.dropdown && (
                  <motion.div
                    layout
                    layoutId={`cursor`}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'white',
                    }}
                  />
                )}
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
                      layout
                      transition={{ bounce: 0 }}
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
                      layoutId={'cursor'}
                    >
                      {item?.items?.map((nav) => {
                        return (
                          <motion.a
                            key={`link-${nav?.id}`}
                            href={`${nav?.url}`}
                            style={{
                              width: '100%',
                              padding: '16px',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                            }}
                          >
                            {nav?.title}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </MotionConfig>
  );
};

export default Menu;