import { AirportNameAndCode, useFindAirport, useTime } from "../../imports"
import { AirportsInfoType,TimeInfoType } from "@/types/common"

interface Props{ 
  flightTime:TimeInfoType
   airlineName:string
   airportsInfo:AirportsInfoType
}
export const SearchResultTimeBox = ({ flightTime, airlineName, airportsInfo }:Props) => {
  const {
    departureDateTime,
    journeyDurationPerMinute,
    arrivalDateTime,
  } = flightTime

  const arrivalAirport = useFindAirport(airportsInfo?.arrivalAirportLocationCode)
  const departureAirport = useFindAirport(airportsInfo?.departureAirportLocationCode)

  return (
    <div className='sm:grid sm:grid-cols-4 sm:col-span-4 col-span-5 w-ull'>
      <div className='flex sm:justify-center sm:items-center sm:col-span-1 max-sm:py-2'>
        <p>{airlineName}</p>
      </div>
      <div className='grid grid-cols-3 items-center sm:col-span-3'>
        <div className='flex flex-col justify-center items-center max-sm:ml-auto'>
          <p className="text-2xl">{useTime(departureDateTime)}</p>
          <AirportNameAndCode
            AirportName={departureAirport?.countryFa}
            airportCode={airportsInfo?.departureAirportLocationCode} />
        </div>
        <div>
          <p className='border-b border-gray-300 text-xs text-center sm:px-4 py-1'>
            {journeyDurationPerMinute}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center max-sm:mr-auto'>
          <p className="text-2xl">{useTime(arrivalDateTime)}</p>
          <AirportNameAndCode
            AirportName={arrivalAirport?.countryFa}
            airportCode={airportsInfo?.arrivalAirportLocationCode} />
        </div>
      </div>
    </div>
  )
}
