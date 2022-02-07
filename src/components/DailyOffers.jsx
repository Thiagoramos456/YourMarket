import React from 'react';
import ProductCard from './ProductCard';

function DailyOffers() {
  return (
    <div className='flex flex-col my-6 mx-4'>
      <h2 className='my-4 text-center'>Ofertas Diárias</h2>
      <section className='flex flex-wrap shadow-2xl lg:justify-center lg:shadow py-8  lg:flex-nowrap'>
          <ProductCard/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </section>
    </div>
  );
}

export default DailyOffers;
