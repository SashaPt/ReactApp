import React, { useState } from 'react';
import { FC } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../components/Products/IProduct';
import http from '../http';
import { initialProduct } from '../components/Products/initialProduct';

const Product: FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>(initialProduct);

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const getProductById = async (id: string | undefined) => {
    const response = await http.get(`products/${id}`);
    setProduct(response.data);
  };

  return (
    <div>
      <h1>Product N {id}</h1>
      <div className="card">
        <div style={{height: "30vh", overflow: 'auto'}}>
          {product.images.map(image =>
            <img src={image} className="card-img-top" alt="product" style={{height: '100%', width: 'auto'}}/>
            )}
          
        </div>
        <div className="card-body">
          <h5 className="card-title">Title: {product.title}</h5>
          <p className="card-text">Description: {product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {product.price}</li>
          <li className="list-group-item">Discount Percentage: {product.discountPercentage}</li>
          <li className="list-group-item">Rating: {product.rating}</li>
          <li className="list-group-item">Stock: {product.stock}</li>
          <li className="list-group-item">Brand: {product.brand}</li>
          <li className="list-group-item">Category: {product.category}</li>
          <li className="list-group-item">Thumbnail: {product.thumbnail}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
