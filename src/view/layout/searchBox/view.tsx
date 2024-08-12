import { CustomButton, DirectionIcon, FormikAutoComplete, FormikDatePicker, PassengerMenu, useFormikContext } from "../imports"

export const SearchBoxView = ({ handleChangeDestination }) => {
    const { values, setFieldValue } = useFormikContext()

    return (
        <div className='sm:grid sm:grid-cols-6 flex flex-col gap-4 bg-white py-10 lg:px-12 md:px-8 px-4'>
            <FormikAutoComplete name='origin' label='مبدا' url='/api/airports' optionLabel='cityFa' />
            <div>
                <CustomButton
                    type='button'
                    variant='contained'
                    color='primary'
                    onClick={() => handleChangeDestination({ values, setFieldValue })}
                >
                    <DirectionIcon className='w-6 h-6' />
                </CustomButton>
            </div>
            <FormikAutoComplete name='destination' label='مقصد' url='/api/airports' optionLabel='cityFa' />
            <FormikDatePicker name='date' />
            <PassengerMenu name='passengers' />
            <div className=''>
                <CustomButton type='submit' variant='contained' color='secondary' >
                    جستجو
                </CustomButton>
            </div>
        </div >
    )
}
