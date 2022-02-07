import React from 'react';

function ProductCard() {
  return (
    <div className='px-6 pt-8 pb-4 w-full shadow'>
      <img
        src='https://http2.mlstatic.com/D_NQ_NP_753068-MLA48354136424_112021-V.webp'
        alt='Celular'
        className='w-16 mx-auto'
      ></img>
      <div className='flex justify-between my-1'>
        <span className='text-sm my-1 block text-green'>R$156.98</span>
        <span className='text-xs my-1 block text-green'>20% off</span>
      </div>
      <span className='text-xs block my-1'>Frete Grátis</span>
      <span className='text-xs block text-gray'>Celular Zenphone 4 Plus 4GB</span>
    </div>
  );
}

export default ProductCard;
