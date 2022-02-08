import React from 'react';

function Category({ thumb, name }) {
  return (
    <div className="flex flex-col items-center mx-2 shadow-lg py-4">
      <img src={thumb} alt={ name } className="w-14" />
			<span className="text-center">{ name }</span>
    </div>
  );
}

export default Category;
