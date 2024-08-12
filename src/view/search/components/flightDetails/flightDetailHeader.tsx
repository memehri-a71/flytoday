
interface Props{
  origin:string
  destination:string
}
export const FlightDetailHeader = ({origin,destination}:Props) => {
  return (
    <div className='font-bold text-lg pb-6'>پرواز رفت {destination} - {origin}</div>
  )
}
