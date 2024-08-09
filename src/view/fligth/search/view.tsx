import { FormikAutoComplete } from '@/components/elements/autoComplete/formikAutoComplete'
import { CustomButton } from '@/components/elements/button/customButton'
import { FormikDatePicker } from '@/components/elements/datePicker/formikDatePicker'
import React from 'react'

export const SearchView = () => {
    return (
        <div className='flex '>
            <FormikAutoComplete name='origin' />
            <CustomButton type='button' variant='contained' color='primary'
                onClick={() => console.log('hi')
                }>
                change
            </CustomButton>
            <FormikAutoComplete name='destination' />
            <FormikDatePicker/>
        </div>
    )
}
