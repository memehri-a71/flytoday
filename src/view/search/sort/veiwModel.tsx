
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react'

interface returnFunc{
    optionSort:Record<string,any>[]
    handleChange:(e:any)=>void
    selectedValue:string
    setSelectedValue:Dispatch<SetStateAction<string>>
  }

export const useSortVeiwModel = ():returnFunc => {
  const [selectedValue, setSelectedValue] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter()

  const optionSort = [
    { value: "priceMax", label: "گرانترین", sortField: 'price', sortOrder: 'desc' },
    { value: "priceMin", label: "ارزانترین", sortField: 'price', sortOrder: 'asc' },
    { value: "timeEarlier", label: "زودترین", sortField: 'time', sortOrder: 'asc' },
    { value: "timeLAter", label: "دیرترین", sortField: 'time', sortOrder: 'desc' }
  ]

  const handleSort = (sortField:string, sortOrder:string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortField', sortField);
    params.set('sortOrder', sortOrder);
    router.push(`?${params.toString()}`);

  };

  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
    const sortType = JSON.parse(event.target.value)
    handleSort(sortType.sortField, sortType.sortOrder)
  };

  return {
    optionSort,
    handleChange,
    selectedValue,
    setSelectedValue
  }
}
