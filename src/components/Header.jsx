import React from 'react';
import cartIcon from '../images/shopping-cart.svg';

function Header() {
  return (
    <header className="bg-blue">
      <nav className="flex justify-around items-center px-3 py-3">
        <span className="font-bold bg-yellow rounded-full px-2 py-1">YM</span>
				<input class="shadow-lg appearance-none rounded w-3/5 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Busque produtos" />
				<div className="relative">
					<span className="absolute bg-black text-white rounded-full px-1 text-sm bottom-3 right-4">
						5
					</span>
					<img className="w-6" alt="Cart" src={cartIcon}></img>
				</div>
      </nav>
    </header>
  );
}

export default Header;
