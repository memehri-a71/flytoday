import { CustomSelect } from '@/components/elements/select/customSelect'
import React from 'react'

export const SortResult = () => {
  const optionSort = [
    { valeu: "priceMax", label: "گرانترین" },
    { valeu: "priceMin", label: "ارزانترین" },
    { valeu: "timeEarlier", label: "زودترین" },
    { valeu: "timeLAter", label: "دیرترین" }
  ]
  return (
   <div className='flex items-center gap-3'>
       <p className='text-gray-primary'>مرتب‌سازی</p>
    <div className='w-44'>
      <CustomSelect options={optionSort}  />
    </div>
   </div>
  )
}
