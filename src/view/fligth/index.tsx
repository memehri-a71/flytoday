'use client'

import React from 'react'
import { Search } from './search'
import { SearchResult } from './searchResult'
import { FilterSidebar } from './filterSidebar'

export const Flight = () => {
  return (
    <div className='lg:px-12 md:px-8 px-4'>
      <Search />
      <div className='sm:grid sm:grid-cols-12 gap-x-6'>
        <div className='lg:col-span-3 max-lg:hidden'>
          <FilterSidebar />
        </div>
        <div className='flex flex-col lg:col-span-9 col-span-12 gap-3'>
          <SearchResult />
        </div>
      </div>
    </div>
  )
}
