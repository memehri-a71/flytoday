import { ArrowTopIcon, CustomRadio, useState } from "../../imports"

interface Props{
    options:Record<string,any>[]
     title:Record<string,any>
     handleChange:(e:any,title:string)=>void
}

export const FilterItem = ({ options, title,handleChange }:Props) => {
    const [showFilterBox, setShowFilterBox] = useState(true)

    return (
        <div className='flex flex-col border-b border-gray-300 py-2'>
            <div className='flex justify-between pb-4'>
                <p className='font-bold text-sm'>{title.label}</p>
                <ArrowTopIcon
                    className='w-4 h-4 cursor-pointer'
                    onClick={() => setShowFilterBox(!showFilterBox)}
                />
            </div>
            <div
                className={`overflow-hidden transition-all duration-1000 w-full ${showFilterBox
                    ? "opacity-100 h-fit"
                    : "opacity-100 h-1"
                    }`}
            >
                <CustomRadio
                    options={options}
                    optionValue='value'
                    optionLable='label'
                    wrapperClass='!flex-col !gap-2 !text-sm'
                    onChange={(e) => handleChange(e, title.value)}              
                      />
            </div>
        </div>
    )
}
