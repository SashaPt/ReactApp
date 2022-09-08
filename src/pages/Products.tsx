import React, { FC, useState, useEffect } from 'react';
import Search from '../components/Search';
import { useAction } from '../hooks/useAction';
import ProductsCards from '../components/Products/ProductsCards';

const Products: FC = () => {
  const [search, setSearch] = useState('');
  const { getProducts } = useAction();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Search setSearch={setSearch} />
      <ProductsCards search={search}/>
    </>
  );
};

export default Products;
