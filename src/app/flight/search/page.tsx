
import { Suspense } from 'react';
import { Search } from '../../../view/search/index';


const SearchPage  = async () => {
  return( <Suspense>
            <Search />
          </Suspense>)
}

export default SearchPage