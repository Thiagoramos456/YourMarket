import React from 'react';
import CATEGORIES from '../data/categories';
import Category from './Category';

function CategoryList() {
  return (
    <section className="grid grid-cols-2 justify-center my-6">
      {CATEGORIES.map(({ thumb, name }) => (
        <Category name={name} thumb={thumb} />
      ))}
    </section>
  );
}

export default CategoryList;
