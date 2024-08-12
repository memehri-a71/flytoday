import { CustomSelect } from "../imports"

export const SortVeiw = ({optionSort,selectedValue,handleChange}) => {
  return (
    <div className='flex items-center gap-3'>
    <p className='text-gray-primary'>مرتب‌سازی</p>

    <div className='w-44'>
      <CustomSelect
        options={optionSort}
        value={selectedValue}
        handleChange={handleChange}
      />
    </div>
  </div>
  )
}
