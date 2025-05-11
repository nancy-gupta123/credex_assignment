'use client'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar1'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: false })
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false })
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
