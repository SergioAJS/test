// import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { Error } from './components/Error';
import { Product } from './components/Product';
// import { products } from './data/products';
import { useProducts } from "./hooks/products";

function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
