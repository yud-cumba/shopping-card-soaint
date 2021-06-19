import React from 'react';
import { Card, Image, Title, Section, Price } from './styles';
import { AddToShop } from '../AddToShop';
import { Link } from '@reach/router'
export const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`detail/${product.id}`}>
        <Image src={product.image} />
        <Title>{product.title}</Title>
      </Link>
      <Section>
        <Price> S/. {product.price}</Price>
        <AddToShop product={product} />
      </Section>
    </Card>
  );
};
