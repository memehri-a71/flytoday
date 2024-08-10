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
    <div className='grid grid-cols-4 col-span-4'>
      <div className='flex justify-center items-center col-span-1'>
        <p>{airlineName}</p>
      </div>
      <div className='flex justify-evenly items-center gap-4 col-span-3'>
        <div className='flex flex-col justify-center items-center'>
          <p>{useTime(departureDateTime)}</p>
          <AirportNameAndCode AirportName={departureAirport?.countryFa} airportCode={departureAirportLocationCode} />
        </div>
        <div>
          <p className='border-b border-gray-300 px-4 py-1'>{journeyDurationPerMinute}</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>{useTime(arrivalDateTime)}</p>
          <AirportNameAndCode AirportName={arrivalAirport?.countryFa} airportCode={arrivalAirportLocationCode} />
        </div>
      </div>
    </div>
  )
}
