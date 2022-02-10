const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?';

async function getProductsWithCategory(productName='', category='') {
  try {
    const response = await fetch(`${SEARCH_ENDPOINT}category=${category}&q=${productName}`);
    const products = await response.json();
    return products;
  } catch(e) {
    console.log(e);
  }
}

export default getProductsWithCategory;