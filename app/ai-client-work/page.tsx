'use client';

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import Results from './components/Results';
import Technology from './components/Technology';
import Ecmdc from '../services/components/Ecmdc';
import Exploremore from '../services/components/Exploremore';
import Cta from '../homecomponents/Cta';
import Footer from '../components/Footer';

const AIClientWorkPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#F1EEEA';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#F1EEEA', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Challenge />
      <Solution />
      <Results />
      <Technology />
      <div className="bg-white -mt-8">
        <Ecmdc />
        <Exploremore />
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default AIClientWorkPage;
