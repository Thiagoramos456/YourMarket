import React from 'react';
import ProductCard from './ProductCard';

function DailyOffers() {
  return (
    <div className='flex flex-col items-center my-6 mx-3 '>
      <h2 className='my-4'>Ofertas Diárias</h2>
      <section className='flex flex-col justify-end shadow-2xl '>
        <div className='flex w-80'>
          <ProductCard />
          <ProductCard />
        </div>
        <div className='flex w-80'>
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
}

export default DailyOffers;
