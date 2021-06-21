import { useState } from 'react'

export const useInputValue = (initialValue , setSearch) => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  setSearch(value)
  return { value, onChange }
}