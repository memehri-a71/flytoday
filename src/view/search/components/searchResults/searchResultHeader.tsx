
import { CustomButton } from '@/components/elements/button/customButton'
import { useFindAirport } from '@/hooks/useFindAirport'
import { usePersionDate } from '@/hooks/usePersionDate'
import { useWeekNameFa } from '@/hooks/useWeekNameFa'
import { Sort } from '@/view/search/sort'

export const SearchResultHeader = ({ airportsInfo, timeInfo, NumberOfّlights }) => {
    const arrivalAirport = useFindAirport(airportsInfo?.arrivalAirportLocationCode)?.countryFa
    const departureAirport = useFindAirport(airportsInfo?.departureAirportLocationCode)?.countryFa
    const day = useWeekNameFa(timeInfo?.departureDateTime)
    const dateFa = usePersionDate(timeInfo?.departureDateTime)

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
                <p className='text-xl font-bold'>بلیط هواپیمای {departureAirport} به {arrivalAirport}</p>
                <p>{NumberOfّlights} پرواز یافت شد . {day}، {dateFa}</p>
            </div>
            <div className='max-sm:hidden'>
                <Sort />
            </div>
        </div>
    )
}
