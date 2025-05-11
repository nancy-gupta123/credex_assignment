'use client';

import Lottie from 'lottie-react';
import uploadAnimation from '../../public/lottie/upload-animation.json';
import valuationAnimation from '../../public/lottie/get-valuation.json';
import paidAnimation from '../../public/lottie/get-paid.json';
import { useTheme } from './ToggleEffect';
const HowItWorks = () => {
  const { isDark } = useTheme();
   
  return (
    <section className={`py-20 px-4 text-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>How It Works</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
          justifyItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Lottie animationData={uploadAnimation} loop={true} style={{ width: '150px' }} />
          <h3 style={{ fontSize: '1.25rem', marginTop: '16px' }}>Upload License</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Lottie animationData={valuationAnimation} loop={true} style={{ width: '150px' }} />
          <h3 style={{ fontSize: '1.25rem', marginTop: '16px' }}>Get Valuation</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Lottie animationData={paidAnimation} loop={true} style={{ width: '150px' }} />
          <h3 style={{ fontSize: '1.25rem', marginTop: '16px' }}>Get Paid</h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
