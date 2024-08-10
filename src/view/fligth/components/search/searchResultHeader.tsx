import React from 'react'
import { SortResult } from '../sortResult'


export const SearchResultHeader = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <p>بلیط هواپیمای تهران به استانبول</p>
                <p>پرواز یافت شد . سه‌شنبه، ۱۲ اردیبهشت ۱۴۰۰</p>
            </div>
            <SortResult />
        </div>
    )
}
