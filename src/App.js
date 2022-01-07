import React from 'react'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Testimonial from './components/Testimonial';
import WeText from './components/WeText';
import WhyUsSection from './components/WhyUsSection';

function App() {
  return (
    <div className=' font-opensans '>

      <Hero />

      <WhyUsSection />

      <ProductSection />

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
