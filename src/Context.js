import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [favs, setFavs] = useState(() => {
    const listShop =JSON.parse(window.localStorage.getItem('listShop')) || []
    return  listShop;
  })

  const value = {
    favs,
    addToShop: list => {
      setFavs(list)
      window.localStorage.setItem('listShop', JSON.stringify(list))
    },
    removeToShop: () => {
      window.localStorage.removeItem('listShop')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Provider,
  Consumer: Context.Consumer
}