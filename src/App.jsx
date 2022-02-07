import React from 'react';
import DailyOffers from './components/DailyOffers';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';

function App() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <DailyOffers /> 
    </div>
  );
}

export default App;
