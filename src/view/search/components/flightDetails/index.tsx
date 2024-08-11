
import { MinusIcon } from '@/utile/icons'
import { CustomTab } from '@/components/tab/customTab'
import { FlightDetailTab } from './flightDetailTab'

export const FlightDetails = ({ flightFeature, flightTime, airlineName, airportsInfo }) => {
    const tabItems = [
        { text: 'جزییات پرواز', icon: <MinusIcon /> },
        { text: 'قوانین و شرایط', icon: <MinusIcon />, disabled: true },
    ]
    const tabPanelItems = [
        <FlightDetailTab
            flightFeature={flightFeature}
            flightTime={flightTime}
            airportsInfo={airportsInfo}
            airlineName={airlineName}
        />,
        <div>قوانین و مقررات</div>,
    ]

    return (
        <CustomTab
            bgPanel="bg-white"
            tabItems={tabItems}
            tabPanelItems={tabPanelItems}
        />
    )
}
