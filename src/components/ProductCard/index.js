import React from 'react';
import { Link, Card, Image, Title, Section, Price } from './styles';
import { AddToShop } from '../AddToShop';

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} />
      <Title>{product.title}</Title>
      <Section>
        <Price> S/. {product.price}</Price>
        <AddToShop product={product} />
      </Section>
      <Link to={`detail/${product.id}`}>Ver detalle</Link>
    </Card>
  );
};
