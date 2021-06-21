import React from 'react';
import {
  Image,
  Actions,
  Div,
  Title,
  Description,
  CardDescription,
  Category,
} from './styles';
import { AddToShop } from '../AddToShop';

export const ProductDescription = ({ product }) => {
  return (
    <Div>
      <Image src={product.image} />
      <CardDescription>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Actions>
          <div>
            <Description>Categoría:</Description>
            <Category>{product.category}</Category>
          </div>
          <AddToShop product={product} />
        </Actions>
      </CardDescription>
    </Div>
  );
};
