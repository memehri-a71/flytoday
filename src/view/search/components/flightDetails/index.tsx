import { AirportsInfoType, FeatureType, TimeInfoType } from "@/types/common"
import { CustomTab, FlightDetailTab, MinusIcon } from "../../imports"

interface Props{
     flightFeature:FeatureType
      flightTime:TimeInfoType
      airlineName:string
      airportsInfo:AirportsInfoType
}
export const FlightDetails = ({ flightFeature, flightTime, airlineName, airportsInfo }:Props) => {
    const tabItems = [
        { text: 'جزییات پرواز', icon: <MinusIcon /> },
        { text: 'قوانین و شرایط', icon: <MinusIcon />, disabled: true },
    ]
    const tabPanelItems = [
        <FlightDetailTab
            key={1}
            flightFeature={flightFeature}
            flightTime={flightTime}
            airportsInfo={airportsInfo}
            airlineName={airlineName}
        />,
        <div key={2}>قوانین و مقررات</div>,
    ]

    return (
        <CustomTab
            bgPanel="bg-white"
            tabItems={tabItems}
            tabPanelItems={tabPanelItems}
        />
    )
}
