
import { CounterButtonView } from '@/components/elements/button/counterButton/view'

interface Props{
     passengersInfo:{
            type:string,
            description:string,
        }
        value:any
        incrementHandler:()=>void
        decrementHandler:()=>void
}
export const CounterBoxView = (props:Props) => {
    const {
        passengersInfo,
        value,
        incrementHandler,
        decrementHandler } = props

    return (

        <div className=' flex justify-between p-2'>
            <div className='flex flex-col gap-1'>
                <p>{passengersInfo.type}</p>
                <p className='text-xs'>{passengersInfo.description}</p>
            </div>
            <CounterButtonView
                value={value}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
            />
        </div>

    )
}
