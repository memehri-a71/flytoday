import { AirportNameAndCode } from '@/components/aitportNameAndCode'
import { useFindAirport } from '@/hooks/useFindAirport'
import { usePersionDate } from '@/hooks/usePersionDate'
import { useTime } from '@/hooks/useTime'
import { CircleIcon } from '@/utile/icons/icon'
import moment from 'jalali-moment'

interface Props{ 
    airport:string
     time:string
     }
export const FlightTime = ({airport , time }:Props) => {
    const datafa = usePersionDate(time)
    const dateEn = moment(time).format('DD MMM')

    return (
        <div className='flex relative'>
            {/* <CircleIcon className='absolute -right-3' /> */}
            <div className='flex max-sm:flex-col gap-2 sm:gap-5 text-sm px-5'>
                <div className='flex gap-5'>
                    <p className='font-bold'>{useTime(time)}</p>
                    <AirportNameAndCode AirportName={useFindAirport(airport)?.countryFa} airportCode={airport} />
                </div>
                <p>{datafa} ({dateEn})</p>
                <p className='text-gray-primary'>{useFindAirport(airport)?.name}</p>
            </div>
        </div>
    )
}
