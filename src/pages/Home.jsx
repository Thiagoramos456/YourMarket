import React, { useContext, useState } from 'react';
import getProductsWithCategory from '../services/mercadoLivreApi';
import CategoryList from '../components/CategoryList';
import DailyOffers from '../components/DailyOffers';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import AppContext from '../context/AppContext';

function Home() {
  const { homeDailyOffers, setHomeDailyOffers } = useContext(AppContext);

  useState(async () => {
    const { results } = await getProductsWithCategory('computador');
    setHomeDailyOffers(results);
  }, []);

  return (
    <div>
      <Header />
      <HeroCarousel />
      <DailyOffers products={homeDailyOffers} />
      <CategoryList />
    </div>
  );
}

export default Home;
