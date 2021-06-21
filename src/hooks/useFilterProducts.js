import { useEffect, useState } from 'react';

export function useFilterProducts(initial, filter) {
  const [filterProducts, setFilterProducts] = useState(() => {
    return initial;
  })
  useEffect(function () {
      console.log('filter', filter)
      if(!!filter){
        setFilterProducts(initial.filter((e) => e.title.toLowerCase().includes(filter)))
      } else{ 
        setFilterProducts(initial)
      }
  }, [initial, filter]);
  return { filterProducts };
}