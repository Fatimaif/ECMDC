'use client';

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from './components/Hero';
import Aidivs from './components/Aidivs';
import ImpactGuide from './components/ImpactGuide';
import Three from './components/Three';
import CaseStudies from './components/CaseStudies';
import Stats from './components/Stats';
import Ecmdc from '../services/components/Ecmdc';
import Ourai from '../services/components/Ourai';
import Exploremore from '../services/components/Exploremore';
import Cta from '../homecomponents/Cta';
import Footer from '../components/Footer';

const ClientImpactPage = () => {
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
      <Aidivs />
      <ImpactGuide />
      <Three />
      <CaseStudies />
      <Stats />
      <Ecmdc />
      <Ourai />
      <Exploremore />
      <Cta />
      <Footer />
    </div>
  );
};

export default ClientImpactPage;
