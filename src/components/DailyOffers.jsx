import React from 'react';
import ProductCard from './ProductCard';

function DailyOffers({ products }) {
  return (
    <div className='flex flex-col my-6 mx-4'>
      <h2 className='my-4 text-center text-xl'>Ofertas Diárias</h2>
        <section className='flex flex-wrap shadow-2xl lg:justify-center lg:shadow py-8  lg:flex-nowrap'>
          {products.length && products
            .slice(0, 4)
            .map(({ price, title, shipping: { free_shipping }, thumbnail }) => (
              <ProductCard price={price} title={title} shipment={free_shipping} thumbnail={thumbnail} />
            ))}
        </section>
    </div>
  );
}

export default DailyOffers;
