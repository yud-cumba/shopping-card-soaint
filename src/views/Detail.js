import React from 'react';
import { ProductDescription } from '../components/ProductDescription';
import { useProductDetailData } from '../hooks/useProductsData';
import { Loading } from '../components/Loading';
export const Detail = ({ detailId }) => {
  const { product, loading, error } = useProductDetailData(detailId);
  if (error) return <div>{error}</div>;
  return (
    <div>
      {loading ? (
        <Loading/>
      ) : 
          <ProductDescription product={product} />
      }
    </div>
  );
};
