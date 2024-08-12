import { FormikWrapper, SearchBoxView, useSearchBoxViewModel } from "../imports"

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
