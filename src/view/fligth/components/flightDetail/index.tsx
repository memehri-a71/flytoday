
import { MinusIcon } from '@/utile/icons'
import React from 'react'
import { FlightDetail } from './flightDetail'
import { CustomTab } from '@/components/tab/customTab'

export const FlightDetailTab = ({ flightFeature, flightTime, airlineName }) => {
    const tabItems = [
        { text: 'جزییات پرواز', icon: <MinusIcon /> },
        { text: 'قوانین و شرایط', icon: <MinusIcon />, disabled:true},
    ]
    const tabPanelItems = [
        <FlightDetail flightFeature={flightFeature} flightTime={flightTime} airlineName={airlineName} />,
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
