import { CustomButton } from '@/components/elements/button/customButton'
import React from 'react'

export const FilterHeader = () => {
    return (
        <div className='flex justify-between border-b border-gray-300 py-4'>
            <p>فیلترها</p>
            <CustomButton type='button' variant='text' >
                <p className='text-blue-primary'>حذف فیلترها</p>
            </CustomButton>
        </div>
    )
}
