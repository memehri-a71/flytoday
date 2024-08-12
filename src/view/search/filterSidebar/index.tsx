import React from 'react'
import { FilterSidebarVeiw } from './veiw'
import { useFilterSidebarVeiwModel } from './veiwModel'

export const FilterSidebar = () => {
  const { filterList, handleChange } = useFilterSidebarVeiwModel()

  return <FilterSidebarVeiw filterList={filterList} handleChange={handleChange} />

}
