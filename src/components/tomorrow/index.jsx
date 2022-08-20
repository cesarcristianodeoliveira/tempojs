import React from 'react'

import { useApiContext } from '../../contexts/ApiContext'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useSlideContext } from '../../contexts/SlideContext'

import { Grid, Box, Typography } from '@mui/material'
import StraightIcon from '@mui/icons-material/Straight'

// day conditions images
import clear_day from '../../assets/weather/day/clear_day.png'

const Tomorrow = () => {

    const { tomorrow } = useApiContext()

    const { theme } = useThemeContext()
    const { TabPanel, slideValue, a11yProps } = useSlideContext()

    return (

        <>
            <TabPanel value={slideValue} index={1} {...a11yProps(1)}  dir={theme.direction}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '100%', 
                        pt: '112px'
                    }}
                >
                    <Grid container spacing={2} sx={{ px: 3, py: 2 }}>

                        <Grid item xs>

                            <Typography color='text.secondary' fontWeight={600}>{tomorrow.date}</Typography>

                            <Box 
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 2
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography fontWeight={600}>Dia:</Typography>

                                    <Box
                                        sx={{
                                            ml: .35
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'top'
                                            }}
                                        >
                                            <Typography fontWeight={600}>
                                                {tomorrow.max}
                                            </Typography>
                                            <Typography fontWeight={600}>
                                                °C
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <StraightIcon />

                                    <Box>
                                        {' • '}
                                    </Box>

                                    <Typography 
                                        fontWeight={600}
                                        sx={{
                                            ml: .75
                                        }}
                                    >
                                        Noite:
                                    </Typography>
                                    
                                    <Box
                                        sx={{
                                            ml: .35
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'top'
                                            }}
                                        >
                                            <Typography fontWeight={600}>
                                                {tomorrow.min}
                                            </Typography>
                                            <Typography fontWeight={600}>
                                                °C
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <StraightIcon
                                        sx={{
                                            transform: 'rotate(180deg)'
                                        }}
                                    />

                                </Box>
                            </Box>

                            <Typography fontWeight={600} sx={{ mt: .75 }}>
                                {tomorrow.description}
                            </Typography>
                            
                        </Grid>

                        <Grid 
                            item 
                            xs
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'end',
                                    justifyContent: 'end',
                                    mt: '-5px'
                                }}
                            >
                                <Box
                                    className='weather-container'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {tomorrow.condition === 'clear_day' && (
                                        <img src={clear_day} alt='Tempo limpo' width='auto' height={86} />
                                    )}
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Box
                    sx={{ mt: 'auto', px: 3 }}
                >
                    
                </Box>
            </TabPanel>
        </>
    )
}

export default Tomorrow