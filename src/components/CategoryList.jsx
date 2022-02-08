import React from 'react';
import CATEGORIES from '../data/categories';
import Category from './Category';

function CategoryList() {
  return (
    <section className="my-10">
			<h2 className="text-xl text-center">Categorias Populares</h2>
			<div className="grid grid-cols-2 justify-center my-6">
				{CATEGORIES.map(({ thumb, name }) => (
					<Category name={name} thumb={thumb} />
				))}
			</div>
    </section>
  );
}

export default CategoryList;
