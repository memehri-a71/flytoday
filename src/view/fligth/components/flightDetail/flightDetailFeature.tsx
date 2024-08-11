
export const FlightDetailFeature = ({ flightFeature, flightTime }) => {
    const data = [
        { title: 'مدت زمان پرواز', value: flightTime?.journeyDurationPerMinute },
        { title: 'نوع پرواز', value: 'سیستمی' },
        { title: 'نوع هواپیما', value: flightFeature?.planeType },
        { title: 'بار مجاز', value: flightFeature?.baggageFa },
        { title: 'کلاس پرواز', value: flightFeature?.cabinClassNameFa },
        { title: 'کلاس نرخی', value: flightFeature?.cabinClassCode },
    ]

    const isReturn = {
        title: 'استرداد', value: flightFeature?.isReturn ?
            <p className='text-green-600'>قابل استرداد</p>
            : <p className='text-red-600'>غیرقابل استرداد</p>
    }

    return (
        <div className='flex gap-16 px-5'>
            <div className='grid grid-cols-2 gap-x-16 gap-y-2'>
                {data?.map(item => <div key={item.value} className='flex gap-4'>
                    <p className='text-gray-primary'>{item?.title}</p>
                    <p>{item?.value}</p>
                </div>)}
            </div>
            < div className='flex gap-4'>
                <p className='text-gray-primary'>{isReturn?.title}</p>
                {isReturn?.value}
            </div>
        </div>
    )
}
