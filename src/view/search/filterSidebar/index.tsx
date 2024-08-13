import { FilterSidebarVeiw, useFilterSidebarVeiwModel } from "../imports"

export const FilterSidebar = () => {
  const { filterList, handleChange } = useFilterSidebarVeiwModel()

  return <FilterSidebarVeiw filterList={filterList} handleChange={handleChange} />

}
