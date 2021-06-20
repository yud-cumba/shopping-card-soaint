import React, { useContext, useState, Fragment } from 'react';
import { MdAddShoppingCart, MdCheckCircle } from 'react-icons/md';
import { Button } from './styles';
import { Context } from '../../Context';

export const AddToShop = ({ product }) => {
  const { addToShop, favs } = useContext(Context);
  const [ show  , setShow  ] =  useState(favs.length && favs.some((e) => e.id === Number(product.id)));
  const addNewShop = () => {
    const ourProducts = favs;
    ourProducts.push(product);
    setShow(true)
    addToShop(ourProducts);
  };
  return (
    <Fragment>
      { show ? (
        <div>
          <MdCheckCircle size={'32px'} color="green" />
        </div>
      ) : (
        <Button onClick={() => addNewShop()}>
          <MdAddShoppingCart size={'32px'} />
        </Button>
      )}
    </Fragment>
  );
};
