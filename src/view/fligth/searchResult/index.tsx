
import { SearchResultView } from './view'
import { SearchResultViewModel } from './viewModel'

export const SearchResult = () => {
  const { data } = SearchResultViewModel()

  return (<SearchResultView data={data} />)
}
