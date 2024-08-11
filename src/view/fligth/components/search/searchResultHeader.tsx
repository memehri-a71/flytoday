import React from 'react'
import { SortResult } from '../sortResult'
import { CustomButton } from '@/components/elements/button/customButton'


export const SearchResultHeader = () => {
    return (
        <div className='flex max-sm:flex-col justify-between items-end'>
            <div className='sm:hidden flex gap-2 py-5'>
                <CustomButton type='button' variant='contained' isFullWidth >
                    <div className='flex items-center'>
                        <p>فیلتر کردن</p>
                    </div>
                </CustomButton>
                <CustomButton type='button' variant='contained' isFullWidth>
                    <div className='flex items-center'>
                        <p>مرتب‌سازی</p>
                    </div>
                </CustomButton>
            </div>
            <div >
                <p className='text-xl font-bold'>بلیط هواپیمای تهران به استانبول</p>
                <p>پرواز یافت شد . سه‌شنبه، ۱۲ اردیبهشت ۱۴۰۰</p>
            </div>
            <div className='max-sm:hidden'>
                <SortResult />
            </div>
        </div>
    )
}
