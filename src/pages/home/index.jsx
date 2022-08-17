import React from 'react'

import { useSlideContext } from '../../contexts/SlideContext'

import { useTheme } from '@mui/material'

import { Today, Tomorrow, ThenDays } from '../../components'

const Home = () => {

    const { TabPanel, slideValue, a11yProps } = useSlideContext()

    const theme = useTheme()

    return (
        <>
            <TabPanel value={slideValue} index={0} {...a11yProps(0)}  dir={theme.direction}>
                <Today />
            </TabPanel>
            <TabPanel value={slideValue} index={1} {...a11yProps(1)}  dir={theme.direction}>
                <Tomorrow />
            </TabPanel>
            <TabPanel value={slideValue} index={2} {...a11yProps(2)}  dir={theme.direction}>
                <ThenDays />
            </TabPanel>
        </>
    )
}

export default Home