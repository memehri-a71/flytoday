import { SearchResultFeatureBox } from "./searchResultFeatureBox"
import { SearchResultPricetInfo } from "./searchResultPriceBox"
import { SearchResultTimeBox } from "./searchResultTimeBox"


export const SearchResultItem = (props) => {
    const { id, flightTime, flightFeature, totalPrice, airlineName,airportsInfo, setShowMoreDetail, showMoreDetail } = props
    return (
        <div>
            <div className='pt-4 px-4 bg-white'>
                <div className='grid grid-cols-5'>
                    <SearchResultTimeBox flightTime={flightTime} airportsInfo={airportsInfo} airlineName={airlineName} />
                    <div className='max-sm:hidden'>
                        <SearchResultPricetInfo text='انتخاب بلیط' isFullWidth totalPrice={totalPrice} />
                    </div>
                </div>
                <div className='grid grid-cols-5 sm:border-t sm:border-gray-300 pt-2'>
                    <div className='sm:col-span-4 col-span-5'>
                        <SearchResultFeatureBox flightFeature={flightFeature} />
                    </div>
                    <div
                        className='col-span-1 cursor-pointer max-sm:hidden py-3'
                        onClick={() => setShowMoreDetail({ ...showMoreDetail, [id]: !showMoreDetail[id] })}
                    >
                        <p className='text-center text-orange-primary'>جزییات بیشتر</p>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <SearchResultPricetInfo text='جزئیات و انتخاب' totalPrice={totalPrice} />
                </div>
            </div>
        </div >
    )
}
