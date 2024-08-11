import jsonData from '../../../utile/data/flight-data.json'
export const useFilterSidebarVeiwModel = () => {

    const airlines = jsonData?.additionalData?.airlines
    const filterList = [
        {
            title: 'نوع پرواز',
            options: [
                { label: 'پروازهای سیستمی', value: 'system' },
                { label: 'پروازهای چارتری', value: 'charter' },
            ],
        },
        {
            title: 'کلاس پروازی',
            options: [
                { label: 'اکونومی', value: 'economy' },
                { label: 'بیزینس', value: 'business' },
            ],
        },
        {
            title: 'ایرلاین ها',
            options: airlines?.map(item => {
                return {
                    label: item?.nameFa,
                    value: item?.name
                }
            }),
        }
    ]
    return { filterList }

}
