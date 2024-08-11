import { AirportNameAndCode } from '@/components/aitportNameAndCode'
import { useFindAirport } from '@/hooks/useFindAirport'
import { useTime } from '@/hooks/useTime'
import { CircleIcon } from '@/utile/icons/icon'
import moment from 'jalali-moment'

export const FlightTime = ({ airport, time }) => {
    const datafa = moment(time).locale('fa').format('DD MMMMYYYY')
    const dateEn = moment(time).format('DD MMM')

    return (
        <div className='flex relative'>
            <CircleIcon className='absolute -right-3' />
            <div className='flex gap-5 text-sm px-5'>
                <p className='font-bold'>{useTime(time)}</p>
                <AirportNameAndCode AirportName={useFindAirport(airport)?.countryFa} airportCode={airport} />
                <p>{datafa} ({dateEn})</p>
                <p className='text-gray-primary'>{useFindAirport(airport)?.name}</p>
            </div>
        </div>
    )
}
