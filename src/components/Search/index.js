import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Div } from './styles';

export const Search = ({ setSearch }) => {
  const search = useInputValue('');
  return (
    <Div>
      <Input
        placeholder="Buscar por título"
        value={search.value}
        onChange={(e) => {
          setSearch(search.value);
          search.onChange(e);
        }}
      ></Input>
    </Div>
  );
};
