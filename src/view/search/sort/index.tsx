import { SortVeiw, useSortVeiwModel } from "../imports"

export const Sort = () => {
  const { optionSort, selectedValue, handleChange } = useSortVeiwModel()
  return (
    <SortVeiw
      optionSort={optionSort}
      selectedValue={selectedValue}
      handleChange={handleChange} />
  )
}
