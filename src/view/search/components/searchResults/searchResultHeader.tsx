
import { AirportsInfoType, CustomButton, Sort, TimeInfoType, useFindAirport, usePersionDate, useWeekNameFa } from "../../imports"

interface Props {
    airportsInfo: AirportsInfoType
    timeInfo: TimeInfoType
    NumberOfّlights: number
}

export const SearchResultHeader = ({ airportsInfo, timeInfo, NumberOfّlights }: Props) => {
    const arrivalAirport = useFindAirport(airportsInfo?.arrivalAirportLocationCode)?.countryFa
    const departureAirport = useFindAirport(airportsInfo?.departureAirportLocationCode)?.countryFa
    const day = useWeekNameFa(timeInfo?.departureDateTime)
    const dateFa = usePersionDate(timeInfo?.departureDateTime)

    return (
        <div className='flex max-sm:flex-col sm:justify-between sm:items-end'>
            <div className='sm:hidden flex gap-2 w-full py-5'>
                <CustomButton type='button' variant='contained' color="info" isFullWidth >
                    <div className='flex items-center text-greyish-brown'>
                        <p>فیلتر کردن</p>
                    </div>
                </CustomButton>
                <CustomButton type='button' variant='contained' color="info" isFullWidth>
                    <div className='flex items-center text-greyish-brown'>
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
