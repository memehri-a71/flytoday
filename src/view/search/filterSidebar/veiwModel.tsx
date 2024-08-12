import { useRouter, useSearchParams } from 'next/navigation';
import jsonData from '../../../utile/data/flight-data.json'

export const useFilterSidebarVeiwModel = () => {
    const router = useRouter()
    const searchParams = useSearchParams();

    const airlines = jsonData?.additionalData?.airlines
    const filterList = [
        {
            title: { label: 'نوع پرواز', value: 'flightType' },
            options: [
                { label: 'پروازهای سیستمی', value: 'system' },
                { label: 'پروازهای چارتری', value: 'charter' },
            ],
        },
        {
            title: { label: 'کلاس پروازی', value: 'fligthClass' },
            options: [
                { label: 'اکونومی', value: 'economy' },
                { label: 'بیزینس', value: 'business' },
            ],
        },
        {
            title: { label: 'ایرلاین ها', value: 'airlines' },
            options: airlines?.map(item => {
                return {
                    label: item?.nameFa,
                    value: item?.iata
                }
            }),
        }
    ]

    const handleFilter = (sortField, filterType) => {
        const params = new URLSearchParams(searchParams);
        params.set(`${sortField}`, filterType);
        router.push(`?${params.toString()}`);
    };

    const handleChange = (event, title) => {
        const newValue = event.target.value
        handleFilter(title, newValue)
    };
    return { filterList, handleChange }

}
