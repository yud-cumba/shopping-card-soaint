import React, { Fragment } from 'react';
import { ProductCard } from '../ProductCard';
import { useProductsData } from '../../hooks/useProductsData';
import { useFilterProducts } from '../../hooks/useFilterProducts';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { Div } from './styles';

export const ListOfProductCards = ({ search }) => {
  const { products, loading, error } = useProductsData();
  const { filterProducts } = useFilterProducts(products, search);
  if (error) return <Error type="error" />;
  const List = filterProducts.length ? (
    <Div>
      {filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Div>
  ) : (
    <Error type="nodata" />
  );
  return <Fragment>{loading ? <Loading /> : List}</Fragment>;
};
