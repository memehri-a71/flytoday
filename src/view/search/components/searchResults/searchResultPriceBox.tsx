import { CustomButton, useNumberFormat } from "../../imports"

export const SearchResultPricetInfo = ({ text, isFullWidth, totalPrice, onClick }) => {
    return <div className='flex sm:flex-col sm:items-center justify-between py-4 sm:border-r sm:border-gray-300 sm:gap-2 sm:col-span-1 sm:py-4 sm:pr-4' >
        <div className='sm:flex sm:flex-col sm:items-center sm:gap-2'>
            <p className='max-sm:text-xs text-gray-primary'>یک نفر</p>
            <div className='flex gap-1'>
                <span className='text-xl text-blue-primary font-bold'>{useNumberFormat(totalPrice)} </span>
                <span>ریال </span>
            </div>
        </div>
        <CustomButton type='button' variant='contained' isFullWidth={isFullWidth} onClick={onClick} >{text}</CustomButton>
    </div>
}