import React from 'react';

function ProductCard({ title, price, shipment, thumbnail }) {
  return (
    <div className='px-1 pt-8 pb-4 h-18 w-1/2 shadow md:w-3/12 lg:w-4/12 lg:mx-4'>
      <img src={thumbnail} alt='Celular' className='w-16 mx-auto lg:w-36'></img>
      <div className='flex justify-center my-2 lg:justify-center'>
        <span className='text-sm my-1 block text-green mx-2 sm:text-xl lg:text-2xl'>{`R$${price.toFixed(2)}`}</span>
        <span className='text-xs my-1 block text-green sm:text-md lg:text-lg'>
          20% off
        </span>
      </div>
      <span className='text-xs block mx-2 my-1 sm:text-lg lg:text-xl'>
        {shipment}
      </span>
      <span className='text-xs block mx-2 text-gray sm:text-md lg:text-lg '>
        {title}
      </span>
    </div>
  );
}

export default ProductCard;
