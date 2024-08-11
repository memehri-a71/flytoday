'use client'

import { SearchView } from './search/view'
import { useSearchViewModel } from './search/viewModel'

export const Search = () => {
  const { items } = useSearchViewModel()
  return (
    <SearchView searchResultList={items}/>
  )
}
