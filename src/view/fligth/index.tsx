'use client'

import React from 'react'
import { Search } from './search'
import { SearchResult } from './searchResult'
import { FilterSidebar } from './filterSidebar'

export const Flight = () => {
  return (
    <div className='px-32'>
      <Search />
      <div className='grid grid-cols-12 gap-x-6'>
        <div className='col-span-3'>
          <FilterSidebar />
        </div>
        <div className='flex flex-col col-span-9 gap-3'>
          <SearchResult />
        </div>
      </div>
    </div>
  )
}
