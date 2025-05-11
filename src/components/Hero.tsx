'use client';

import React from 'react';
import { useTheme } from './ToggleEffect';

import Lottie from 'lottie-react';
import HeroAnimation from '../../public/lottie/hero-animation.json'
const Hero = () => {
 const { isDark } = useTheme();
  return (
    <section className={`py-20 px-4 text-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div>
        <Lottie
          animationData={HeroAnimation}
          loop
          autoplay
          style={{ height: 300 }}
        />
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Sell Your Unused Software Licenses</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Convert unused software into cash in just a few steps.
        </p>
        <button
          style={{
            backgroundColor: '#4f46e5',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;

