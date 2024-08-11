import React from 'react'
import { FilterSidebarVeiw } from './veiw'
import { useFilterSidebarVeiwModel } from './veiwModel'

export const FilterSidebar = () => {
  const { filterList } = useFilterSidebarVeiwModel()
  return (
    <FilterSidebarVeiw filterList={filterList} />
  )
}
