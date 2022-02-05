import React from 'react';
import cartIcon from '../images/shopping-cart.svg';
import searchIcon from '../images/search.svg';

function Header() {
  return (
    <header>
      <nav className='flex justify-around items-center px-3 py-3'>
        <div class='flex rounded-full border-grey-light border'>
          <button>
            <span class='w-auto flex justify-end items-center text-grey p-2'>
              <img src={searchIcon} alt="Search Icon" className='w-8'></img>
            </span>
          </button>
          <input
            className='w-full rounded mr-4 outline-none'
            type='text'
            placeholder='Search...'
          />
        </div>
        <div className='relative'>
          <span className='absolute bg-black rounded-full px-1 text-sm bottom-2/4 right-2/3 sm:text-xl text-white'>
            5
          </span>
          <img className='w-12' alt='Cart' src={cartIcon}></img>
        </div>
      </nav>
    </header>
  );
}

export default Header;
