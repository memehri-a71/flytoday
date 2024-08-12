import { FormikAutoComplete } from '@/components/elements/autoComplete/formikAutoComplete'
import { CounterButton } from '@/components/elements/button/counterButton'
import { CustomButton } from '@/components/elements/button/customButton'
import { FormikDatePicker } from '@/components/elements/datePicker/formikDatePicker'
import { DirectionIcon } from '@/utile/icons'
import { useFormikContext } from 'formik'
import { CounterMenu } from '../../fligth/components/menu'


export const SearchBoxView = ({ handleChangeDestination, showMenu, setShowMenu }) => {
    const { values, setFieldValue } = useFormikContext()

    return (
        <div className='sm:grid sm:grid-cols-12 flex flex-col gap-4 bg-white py-10 lg:px-12 md:px-8 px-4'>
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
            <div className='relative'>
                <CustomButton type='button' variant='outlined' color='primary' onClick={() => setShowMenu(!showMenu)} >
                    <div className='text-black'>تعداد مسافران</div>
                </CustomButton>
                {showMenu
                    ? <CounterMenu name='passengers' />
                    : null}
            </div>

            <CustomButton type='submit' variant='contained' color='secondary' >
                جستجو
            </CustomButton>
        </div >
    )
}
