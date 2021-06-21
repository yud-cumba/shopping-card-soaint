import React, { Fragment, useState } from 'react'
import { ListOfProductCards } from '../components/ListOfProductCards'
import { Search } from '../components/Search'
export const Home = () => {
  const [ search , setSearch ] = useState('');
    return (
      <Fragment>
          <Search setSearch={setSearch}/>
          <ListOfProductCards  search={search}/>
      </Fragment>
    )
  }