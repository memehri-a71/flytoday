'use client'

import type { ReactElement, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import { a11yProps, sxTab, sxTabs } from './tabStyles'
import { CustomTabPanel } from './customTabPanel'

export const CustomTab = (props) => {
  const {
    noBorderDivider,
    tabItems,
    tabPanelItems,
    iconPosition,
    indicatorColor,
    marginTopTabPanel,
    selectedStyles,
    tabButtonsStyles,
    bgPanel,
    tabsWidth = '100%',
    onChangeTab,
    tabSx,
  } = props

  const [value, setValue] = useState<number | string>(0)

  const handleChange = (_e: SyntheticEvent, newValue: number): void => {
    setValue(newValue)
    onChangeTab?.(newValue)
  }


  return (
    <div className="w-full bg-white">
      <Box
        className="flex justify-between items-center bg-white"
        sx={{ borderBottom: noBorderDivider ? 0 : 1, borderColor: 'divider' ,bgcolor: '#fff'  }}
      >
        <Tabs
          value={value}
          variant="scrollable"
          sx={sxTabs(
            indicatorColor,
            selectedStyles,
            tabButtonsStyles,
            tabsWidth,
            
          )}
          onChange={handleChange}
        >
          {tabItems?.map((item: any, index: number) => {
            return (
              <Tab
                {...a11yProps(index)}
                label={item?.text}
                key={item?.key}
                icon={item?.icon}
                iconPosition={iconPosition}
                sx={{ ...sxTab, ...tabSx }}
                disabled={Boolean(item?.disabled)}
              />
            )
          })}
        </Tabs>
      </Box>
      <Box sx={{ marginTop: marginTopTabPanel || '12px' }}>
        {tabPanelItems?.map((item: any, index: number) => (
          <CustomTabPanel
            bgPanel={bgPanel}
            value={value}
            index={index}
            key={index}
          >
            {item}
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  )
}
