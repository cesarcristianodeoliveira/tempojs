import React from 'react'

import { useApiContext } from '../../contexts/ApiContext'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useSlideContext } from '../../contexts/SlideContext'

import { Box, Grid, Typography } from '@mui/material'

import clear_day from '../../assets/weather/day/clear_day.png'
import cloudly_day from '../../assets/weather/day/cloudly_day.png'
import cloud from '../../assets/weather/day/cloud.png'

import rain from '../../assets/weather/day/rain.png'

const ThenDays = () => {
    
    const { thenDays } = useApiContext()
    const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const { theme, mode } = useThemeContext()
    const { TabPanel, slideValue, a11yProps } = useSlideContext()

    return (
        <>
            <TabPanel value={slideValue} index={2} {...a11yProps(2)}  dir={theme.direction}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        pt: '112px'
                    }}
                >
                    <Box className='grid-days'>
                        {days.map((i) => (
                            <Grid 
                                key={i} 
                                container 
                                sx={{
                                    px: 3,
                                    py: 2,
                                    alignItems: 'center',
                                    borderBottom: mode ? '1px solid rgba(0, 0, 0, .15)' : '1px solid rgba(255, 255, 255, .15)'
                                }}
                            >
                                <Grid
                                    item
                                    xs
                                >
                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography>
                                            {thenDays[i] === thenDays[0] ? (
                                                'Hoje'
                                            ) : (
                                                <>
                                                    {thenDays[i].weekday}
                                                </>
                                            )}
                                        </Typography>
                                        {thenDays[i] === thenDays[0] ? null : (
                                            <Typography 
                                                sx={{
                                                    ml: .75
                                                }}    
                                            >
                                                {thenDays[i].date}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Typography color='text.secondary' fontWeight={600}>
                                        {thenDays[i].description}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    sx={{
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {thenDays[i].condition === 'clear_day' && (
                                            <img src={clear_day} alt='Tempo limpo' width='auto' height={40} />
                                        )}
                                        {thenDays[i].condition === 'cloud' && (
                                            <img src={cloud} alt='Nublado' width='auto' height={40} />
                                        )}
                                        {thenDays[i].condition === 'cloudly_day' && (
                                            <img src={cloudly_day} alt='Parcialmente nublado' width='auto' height={40} />
                                        )}
                                        {thenDays[i].condition === 'rain' && (
                                            <img src={rain} alt='Chuva' width='auto' height={40} />
                                        )}
                                        <Box 
                                            sx={{ ml: 2 }}
                                        >
                                            <Typography>
                                                {thenDays[i].max}°
                                            </Typography>
                                            <Typography color='text.secondary'>
                                                {thenDays[i].min}°
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            px: 3,
                            py: 2
                        }}
                    >
                        <a 
                            href='https://hgbrasil.com/' 
                            target='_blank'
                            rel='noreferrer' 
                            style={{ 
                                color: 'inherit', 
                                textDecoration: 'none' 
                            }}
                        >
                            <Typography color='text.secondary'>hgbrasil.com</Typography>
                        </a>
                    </Box>

                </Box>
            </TabPanel>
        </>
    )
}

export default ThenDays