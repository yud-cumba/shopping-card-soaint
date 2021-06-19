import React from 'react';
import { ProductDescription } from '../components/ProductDescription';
import { useProductDetailData } from '../hooks/useProductsData';
export const Detail = ({ detailId }) => {
  const { product, loading, error } = useProductDetailData(detailId);
  if (error) return <div>{error}</div>;
  return (
    <div>
      {loading ? (
        <div key="load">Cargando ...</div>
      ) : 
          <ProductDescription product={product} />
      }
    </div>
  );
};
