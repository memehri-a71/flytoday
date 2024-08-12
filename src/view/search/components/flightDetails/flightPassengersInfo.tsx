import { useNumberFormat } from '@/hooks/useNumberFormat';
import { useSearchParams } from 'next/navigation'
interface Props{
    totalPrice:number
}
export const FlightPassengersInfo = ({totalPrice}:Props) => {
    const searchParams = useSearchParams();
    const passengers = [
        { name: 'adult', value: searchParams.get('adult'), label: 'بزرگسال' },
        { name: 'child', value: searchParams.get('child'), label: 'کودک' },
        { name: 'baby', value: searchParams.get('baby'), label: 'نوزاد' },
    ]
    const price=useNumberFormat(totalPrice)
    const totalPassengersPrice=useNumberFormat(totalPrice*passengers.reduce((acc,cur)=>{
        return acc+Number(cur.value)
        },0))

    return (
        <div className='md:grid md:grid-cols-4 flex flex-col max-md:border max-md:border-gray-300 text-sm md:pt-8 mt-4'>
            {
                passengers?.map(item => <div className='flex md:justify-center justify-between items-center md:gap-4 gap-2 md:border md:border-gray-300 p-3'>
                    <div>
                    <span>{item?.value}</span>*  <span>{item?.label}</span>
                        </div>
                    <p>{price} ریال</p>
                </div>)
            }
            <div className='flex md:justify-center justify-between items-center md:gap-4 gap-2 md:border md:border-gray-300 p-3'>
                 <p className='font-bold'>مجموع</p>
                    <p className='text-blue-primary font-bold'>{totalPassengersPrice} ریال</p>
                </div>
        </div>
    )
}
