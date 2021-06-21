import React, { Fragment, useState, useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { MyFavs, Tooltip, Link, Div, Img } from './styles';
import { Context } from '../../Context';

export const Favs = () => {
  const { favs } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <MyFavs
        onClick={() => {
          setShow(!show);
        }}
      >
        <MdAddShoppingCart size={'20px'} /> Mis compras
      </MyFavs>
      {show && (
        <Tooltip>
          {!favs.length ? (
            <div>No hay nada en el carrito</div>
          ) : (
            <ul>
              {favs.map((fav) => (
                <li key={fav.id}>
                  <Link to={`detail/${fav.id}`}>
                    <Div>
                      <Img src={fav.image} />
                      {fav.title}
                    </Div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Tooltip>
      )}
    </Fragment>
  );
};
