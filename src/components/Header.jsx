import React from 'react';
import cartIcon from '../images/shopping-cart.svg';
import searchIcon from '../images/search.svg';

function Header() {
  return (
    <header>
      <nav className='flex justify-around items-center px-1 py-3 sm:justify-end'>
        <div className='flex rounded-full border-grey-light border w-4/6 sm:w-2/5 sm:mx-10'>
          <button>
            <span className='w-auto flex justify-end items-center text-grey p-2'>
              <img src={searchIcon} alt="Search Icon" className='w-8'></img>
            </span>
          </button>
          <input
            className='w-full rounded mr-4 outline-none'
            type='text'
            placeholder='Search...'
          />
        </div>
        <div className='relative sm:mx-10'>
          <span className='absolute bg-black rounded-full px-2 font-bold text-md bottom-2/4 right-2/3 sm:text-xl text-white'>
            5
          </span>
          <img className='w-12' alt='Cart' src={cartIcon}></img>
        </div>
      </nav>
    </header>
  );
}

export default Header;
