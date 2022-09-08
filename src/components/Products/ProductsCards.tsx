import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../Loader';

const ProductsCards = ({ search }: { search: string }) => {
  const { products } = useTypedSelector((state) => state.products);
  const searchedProducts = useSearch(products, 'title', search);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {searchedProducts.length ? (
        searchedProducts.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <div style={{ height: '20vh' }}>
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="product"
                  style={{ height: '100%', width: 'auto' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </h5>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Category: {product.category}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader color="text-primary" />
      )}
    </div>
  );
};

export default ProductsCards;
