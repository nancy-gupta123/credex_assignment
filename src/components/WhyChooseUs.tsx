'use client';
import { useTheme } from "./ToggleEffect";
const WhyChooseUs = () => {
    const { isDark } = useTheme();
    return (
      <section className={`py-20 px-4 text-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Why Choose Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '30px', backgroundColor: '#1a202c', color: 'white', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Instant Payments</h3>
            <p>Get your payments quickly after we confirm your license details.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#28a745', color: 'white', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Safe and Secure</h3>
            <p>Your transactions are protected with the highest level of security.</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#ffc107', color: 'black', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '15px' }}>Transparent Process</h3>
            <p>Know exactly what to expect at every step of the process.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  