import React from 'react';
import {Page, ErrorImg, NoData} from './styles'

export const Error = ({ type }) => {
  const Logo = type === 'error' ? ErrorImg : NoData;
  const text  = type === 'error' ? 'Página de error' : 'No hay información';
  return (
    <Page>
      <Logo/>
      <h3>{text}</h3>
    </Page>
  );
};