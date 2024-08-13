
'use client'
import { SearchView, useSearchViewModel } from "./imports"

export const Search = () => {
  const { items } = useSearchViewModel()
  return  <SearchView searchResultList={items} />
}
