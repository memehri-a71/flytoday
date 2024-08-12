'use client'

import { SearchBox } from '../layout/searchBox'
import { SearchView } from './search/view'
import { useSearchViewModel } from './search/viewModel'

export const Search = () => {
  const { items } = useSearchViewModel()
  return (
    <>
      <div className='w-full'>
        <SearchBox />
      </div>
      <SearchView searchResultList={items} />
    </>
  )
}
