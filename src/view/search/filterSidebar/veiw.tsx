import { FilterHeader } from '@/view/search/components/filter/filterHeader'
import { FilterItem } from '@/view/search/components/filter/filterItem'

export const FilterSidebarVeiw = ({ filterList ,handleChange}) => {

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
              handleChange={handleChange}
            />
          )
        }
      </div>

    </div>
  )
}
