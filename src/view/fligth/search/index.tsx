import { FormikWrapper } from '@/components/form/formikWrapper'
import React from 'react'
import { useSearchViewModel } from './viewModel'
import { SearchView } from './view'

export const Search = () => {
    const { initialValues, validationSchema, onSubmit } = useSearchViewModel()
    return (
        <FormikWrapper
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <SearchView />
        </FormikWrapper>
    )
}
