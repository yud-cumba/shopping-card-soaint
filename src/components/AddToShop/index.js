import React, { useContext, Fragment } from 'react';
import { MdAddShoppingCart, MdCheckCircle } from 'react-icons/md';
import { Button } from './styles';
import { Context } from '../../Context';

export const AddToShop = ({ product }) => {
  const { addToShop, favs } = useContext(Context);
  const addNewShop = () => {
    const ourProducts = favs;
    ourProducts.push(product);
    addToShop(ourProducts);
  };
  return (
    <Fragment>
      {favs.length && favs.some((e) => e.id === product.id) ? (
        <div>
          <MdCheckCircle size={'32px'} color="green" />
        </div>
      ) : (
        <Button onClick={() => addNewShop()}>
          {' '}
          <MdAddShoppingCart size={'32px'} />
        </Button>
      )}
    </Fragment>
  );
};
