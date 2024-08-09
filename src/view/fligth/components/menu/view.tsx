import { CounterButton } from '@/components/elements/button/counterButton'
import { CustomButton } from '@/components/elements/button/customButton'

export const CounterMenuView = ({ quantity, setQuantity, passengersInfo, handlePassengerNumber }) => {

    return (
        <div className='absolute top-10 text-black bg-white shadow-sm rounded-lg p-4 w-72'>
            {passengersInfo?.map(item =>
                <div className=' flex justify-between p-2'>
                    <div className='flex flex-col gap-1'>
                        <p>{item.type}</p>
                        <p className='text-xs'>{item.description}</p>
                    </div>
                    <CounterButton quantity={quantity} setQuantity={setQuantity} />
                </div>
            )}
            <CustomButton
                type='button'
                variant='contained'
                color='primary'
                onClick={handlePassengerNumber}
            >
                تایید
            </CustomButton>
        </div>
    )
}
