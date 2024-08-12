import { FilterHeader, FilterItem } from "../imports"

 interface Props{ 
    filterList:Record<string,any>
    handleChange: (e:any,title:string)=>void
    }

export const FilterSidebarVeiw = ({ filterList ,handleChange}:Props) => {

  return (
    <div className='bg-white px-4'>
      <FilterHeader />
      <div className='flex flex-col gap-4 py-4'>
        {
          filterList?.map((item:any) =>
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
