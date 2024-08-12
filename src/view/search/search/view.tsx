import React from 'react'
import { SearchBox } from '../../layout/searchBox'
import { SearchResults } from '../components/searchResults'
import { FilterSidebar } from '@/view/search/filterSidebar'


export const SearchView = ({ searchResultList }) => {
    return (
        <div className='lg:px-12 md:px-8 px-4'>
           
            <div className='sm:grid sm:grid-cols-12 gap-x-6 py-5'>
                <div className='lg:col-span-3 max-lg:hidden'>
                    <FilterSidebar />
                </div>
                <div className='flex flex-col lg:col-span-9 col-span-12 gap-3'>
                    <SearchResults data={searchResultList} />
                </div>
            </div>
        </div>
    )
}
