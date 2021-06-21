import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Div } from './styles';

export const Search = ({ setSearch }) => {
  const search = useInputValue('', setSearch);
  return (
    <Div>
      <Input
        placeholder="Buscar por título"
        { ...search }
      ></Input>
    </Div>
  );
};
