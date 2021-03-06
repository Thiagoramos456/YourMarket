import React from 'react';
import CategoryList from './components/CategoryList';
import DailyOffers from './components/DailyOffers';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';

function App() {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <DailyOffers />
      <CategoryList />
    </div>
  );
}

export default App;
