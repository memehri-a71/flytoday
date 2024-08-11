import { AirportNameAndCode } from "@/components/aitportNameAndCode"
import { useFindAirport } from "@/hooks/useFindAirport"
import { useTime } from "@/hooks/useTime"


export const FlightTimeBox = ({ flightTime, airlineName }) => {
  const { departureDateTime,
    departureAirportLocationCode,
    journeyDurationPerMinute,
    arrivalDateTime,
    arrivalAirportLocationCode } = flightTime

  const arrivalAirport = useFindAirport(arrivalAirportLocationCode)
  const departureAirport = useFindAirport(departureAirportLocationCode)

  return (
    <div className='sm:grid sm:grid-cols-4 sm:col-span-4 col-span-5 w-ull'>
      <div className='flex sm:justify-center sm:items-center sm:col-span-1 max-sm:py-2'>
        <p>{airlineName}</p>
      </div>
      <div className='grid grid-cols-3 items-center sm:col-span-3'>
        <div className='flex flex-col justify-center items-center max-sm:ml-auto'>
          <p className="text-2xl">{useTime(departureDateTime)}</p>
          <AirportNameAndCode AirportName={departureAirport?.countryFa} airportCode={departureAirportLocationCode} />
        </div>
        <div>
          <p className='border-b border-gray-300 text-xs text-center sm:px-4 py-1'>{journeyDurationPerMinute}</p>
        </div>
        <div className='flex flex-col justify-center items-center max-sm:mr-auto'>
          <p className="text-2xl">{useTime(arrivalDateTime)}</p>
          <AirportNameAndCode AirportName={arrivalAirport?.countryFa} airportCode={arrivalAirportLocationCode} />
        </div>
      </div>
    </div>
  )
}
