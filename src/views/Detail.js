import React from 'react';
import { ProductDescription } from '../components/ProductDescription';
import { useProductDetailData } from '../hooks/useProductsData';
import { Loading } from '../components/Loading';
import { Helmet } from 'react-helmet';

export const Detail = ({ detailId }) => {
  const { product, loading, error } = useProductDetailData(detailId);
  if (error) return <div>{error}</div>;
  return (
    <div>
      <Helmet>
        <title>SoaintShop😄 | Vista detalle </title>
        <meta name="description" content="Visualizar detalle del producto" />
      </Helmet>
      {loading ? (
        <Loading/>
      ) : 
          <ProductDescription product={product} />
      }
    </div>
  );
};
