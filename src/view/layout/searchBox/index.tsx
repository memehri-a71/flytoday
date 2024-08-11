import { FormikWrapper } from '@/components/form/formikWrapper'
import { SearchBoxView } from './view'
import { useSearchBoxViewModel } from './viewModel'


export const SearchBox = () => {
    const { initialValues,
        validationSchema,
        onSubmit,
        handleChangeDestination,
        showMenu,
        setShowMenu } = useSearchBoxViewModel()
    return (
        <FormikWrapper
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <SearchBoxView handleChangeDestination={handleChangeDestination} showMenu={showMenu} setShowMenu={setShowMenu} />
        </FormikWrapper>
    )
}
