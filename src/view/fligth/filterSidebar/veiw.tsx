import React from 'react'
import { FilterHeader } from '../components/filter/filterHeader'
import { FilterItem } from '../components/filter/filterItem'

export const FilterSidebarVeiw = ({ filterList }) => {
  return (
    <div className='bg-white px-4'>
      <FilterHeader />
      <div className='flex flex-col gap-4 py-4'>

        {
          filterList?.map(item =>
            <FilterItem
              key={item.title}
              options={item?.options}
              title={item?.title}
            />
          )
        }
      </div>

    </div>
  )
}
