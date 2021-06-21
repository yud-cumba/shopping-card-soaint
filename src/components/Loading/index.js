import React from 'react';
import { Page } from './styles';
import ReactLoading from 'react-loading';
export const Loading = ({ product }) => {
  return (
    <Page>
      <ReactLoading type='spin' color='purple' height={100} width={100} />
    </Page>
  );
};