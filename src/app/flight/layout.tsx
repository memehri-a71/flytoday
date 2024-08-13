'use client'
import { SearchBox } from "@/view/layout/searchBox"

const Layout = ({ children }: any): any => {
    return <div className='lg:px-12 md:px-8 px-4'>
        <SearchBox />
        <div className='w-full'>
          {children}
        </div>

    </div>
}

export default Layout