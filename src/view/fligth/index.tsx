'use client'

import React from 'react'
import { Search } from './search'
import { SearchResult } from './searchResult'

export const Flight = () => {
  return (
    <div className='flex flex-col gap-4 px-12'>
      <Search />
      <SearchResult/>
    </div>
  )
}
