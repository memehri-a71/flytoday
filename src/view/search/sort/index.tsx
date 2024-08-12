
import { SortVeiw } from './veiw';
import { useSortVeiwModel } from './veiwModel';

export const Sort = () => {
  const { optionSort, selectedValue, handleChange } = useSortVeiwModel()
  return (
    <SortVeiw
      optionSort={optionSort}
      selectedValue={selectedValue}
      handleChange={handleChange} />
  )
}
