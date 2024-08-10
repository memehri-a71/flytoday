import { CustomTab } from '@/components/tab/CustomTab'
import { MinusIcon } from '@/utile/icons'
import React from 'react'
import { FlightDetail } from './flightDetail'

export const FlightDetailTab = ({ flightFeature, flightTime }) => {
    const tabItems = [
        { text: 'جزییات پرواز', icon: <MinusIcon /> },
        { text: 'قوانین و شرایط', icon: <MinusIcon /> },
    ]
    console.log({ flightFeature, flightTime });

    const tabPanelItems = [
        <FlightDetail flightFeature={flightFeature} flightTime={flightTime} />,
        <div>قوانین و مقررات</div>,
    ]
    return (
        <CustomTab
            bgPanel="bg-white"
            tabItems={tabItems}
            tabPanelItems={tabPanelItems}
            // tabSx={{
            //     width: '13%',
            // }}
        />
    )
}
