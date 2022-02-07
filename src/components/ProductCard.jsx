import React from 'react';

function ProductCard({ description }) {
  return (
    <div className='px-1 pt-8 pb-4 h-18 w-1/2 shadow md:w-3/12 lg:w-4/12 lg:mx-4'>
      <img
        src='https://http2.mlstatic.com/D_NQ_NP_753068-MLA48354136424_112021-V.webp'
        alt='Celular'
        className='w-16 mx-auto lg:w-20'
      ></img>
      <div className='flex justify-center my-2 lg:justify-center'>
        <span className='text-sm my-1 block text-green mx-2 sm:text-xl lg:text-2xl'>R$156.98</span>
        <span className='text-xs my-1 block text-green sm:text-md lg:text-lg'>20% off</span>
      </div>
      <span className='text-xs block mx-2 my-1 sm:text-lg lg:text-xl'>Frete Grátis</span>
      <span className='text-xs block mx-2 text-gray sm:text-md lg:text-lg '>{ description ? description : 'Celular Zenphone 4 Plus 4GB ' }</span>
    </div>
  );
}

export default ProductCard;
