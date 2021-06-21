import { useEffect, useState } from 'react';
import { getProducts, getProductsDetail } from '../api/products';
export function useProductsData(filter) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError ]= useState(false);
  useEffect(function () {
    setLoading(true);
    async function fetchData() {
      try{
      let allProducts = await getProducts();
      setProducts(allProducts);
      } catch (e){
        setError(e)
      } finally{
      setLoading(false);
      }
    }
    fetchData();
  }, [filter]);

  return { products, loading, error };
}
export function useProductDetailData(detailId) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError ]= useState(false);
    useEffect(function () {
      // setLoading(true);
      async function fetchData() {
        setLoading(true);
        try{
        const detailProduct = await getProductsDetail(detailId);
        setProduct(detailProduct);
        } catch (e){
          setError(e)
        } finally{
        setLoading(false);
        }
      }
      fetchData();
    }, [detailId]);
  
    return { product, loading, error };
  }