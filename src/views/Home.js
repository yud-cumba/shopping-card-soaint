import React, { Fragment, useState } from 'react'
import { ListOfProductCards } from '../components/ListOfProductCards'
import { Helmet } from 'react-helmet'

import { Search } from '../components/Search'
export const Home = () => {
  const [ search , setSearch ] = useState('');
    return (
      <Fragment>
        <Helmet>
          <title>SoaintShop😄| Pagína principal </title>
          <meta name='description' content='Visualizar lista de productos' />
      </Helmet>
          <Search setSearch={setSearch}/>
          <ListOfProductCards  search={search}/>
      </Fragment>
    )
  }