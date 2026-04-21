'use client';

import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Hero from './components/Hero'
import Aidivs from './components/Aidivs'
import Para from './components/Para'
import Three from './components/Three'
import Client from './components/Client'
import Insights from '../../services/components/Insights'
import Ecmdc from '../../services/components/Ecmdc'
import Ourai from '../../services/components/Ourai'
import Exploremore from '../../services/components/Exploremore'
import Cta from '../../homecomponents/Cta'
import Footer from '../../components/Footer'

const Energy = () => {
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
      <Header/>
      <Hero/>
      <Aidivs/>
      <Para/>
      <Three/>
      <Client/>
      <Insights/>
      <div className="bg-white -mt-8">
        <Ecmdc/>
        <Exploremore/>
      </div>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Energy
