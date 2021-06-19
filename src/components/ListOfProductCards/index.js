import React from 'react';
import { ProductCard } from '../ProductCard';
import { useProductsData } from '../../hooks/useProductsData';
import { Div } from './styles';

export const ListOfProductCards = () => {
  const { products, loading, error } = useProductsData();

  if (error) return <div>{error}</div>;
  return (
    <Div>
      {loading ? (
        <div key="loading">Cargando ...</div>
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </Div>
  );
};
