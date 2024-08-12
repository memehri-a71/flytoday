import { useRouter, useSearchParams, useState } from "../imports";

export const useSortVeiwModel = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const router = useRouter()
  const searchParams = useSearchParams();

  const optionSort = [
    { value: "priceMax", label: "گرانترین", sortField: 'price', sortOrder: 'desc' },
    { value: "priceMin", label: "ارزانترین", sortField: 'price', sortOrder: 'asc' },
    { value: "timeEarlier", label: "زودترین", sortField: 'time', sortOrder: 'asc' },
    { value: "timeLAter", label: "دیرترین", sortField: 'time', sortOrder: 'desc' }
  ]

  const handleSort = (sortField, sortOrder) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortField', sortField);
    params.set('sortOrder', sortOrder);
    router.push(`?${params.toString()}`);

  };

  const handleChange = (event) => {
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
