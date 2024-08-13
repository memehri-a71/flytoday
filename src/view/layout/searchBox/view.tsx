import { CustomButton, DirectionIcon, FormikAutoComplete, FormikDatePicker, PassengerMenu, useFormikContext } from "../imports"

interface Props {
    handleChangeDestination: ({ values, setFieldValue }: any) => void
}
export const SearchBoxView = ({ handleChangeDestination }: Props) => {
    const { values, setFieldValue } = useFormikContext()

    return (
        <div className='sm:grid sm:grid-cols-28 flex flex-col gap-3 bg-white py-10 lg:px-12 md:px-8 px-4'>
            <div className="max-sm:relative col-span-6">
                <FormikAutoComplete name='origin' label='مبدا' url='/api/airports' optionLabel='cityFa' />
            </div>
            <div className="max-sm:absolute left-6 max-sm:top-16 z-50">
                <CustomButton
                    type='button'
                    variant='contained'
                    color='info'
                    width='40px'
                    onClick={() => handleChangeDestination({ values, setFieldValue })}
                >
                    <DirectionIcon className='w-6 h-6' color="var(--greyish-brown)"/>
                </CustomButton>
            </div>
            <div className="col-span-6">
                <FormikAutoComplete name='destination' label='مقصد' url='/api/airports' optionLabel='cityFa' />
            </div>
            <div className="col-span-6">
                <FormikDatePicker name='date' />
            </div>
            <div className="col-span-6">
                <PassengerMenu name='passengers' />
            </div>

            <div className="col-span-3">
                <CustomButton type='submit' variant='contained' color='secondary' isFullWidth >
                    جستجو
                </CustomButton>
            </div>
        </div >
    )
}
