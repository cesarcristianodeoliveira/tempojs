import React from 'react'

import { useApiContext } from '../../contexts/ApiContext'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useSlideContext } from '../../contexts/SlideContext'

import { Box, Grid, Typography } from '@mui/material'
import StraightIcon from '@mui/icons-material/Straight'

// day conditions images
import clear_day from '../../assets/weather/day/clear_day.png'
import cloudly_day from '../../assets/weather/day/cloudly_day.png'
import cloud from '../../assets/weather/day/cloud.png'

// night conditions images
import cloudly_night from '../../assets/weather/night/cloudly_night.png'

const Today = () => {

    const { weather, today } = useApiContext()

    const { theme } = useThemeContext()
    const { TabPanel, slideValue, a11yProps } = useSlideContext()

    return (
        <>
            
            <TabPanel value={slideValue} index={0} {...a11yProps(0)}  dir={theme.direction}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: 'calc(100% - 56px)',
                        pt: '112px',
                    }}
                >
                    <Box
                        sx={{
                            px: 3,
                            py: 2
                        }}
                    >
                        <Grid container spacing={2}>

                            <Grid item xs>

                                <Typography color='text.secondary' fontWeight={600}>{weather.date}, {weather.time}</Typography>

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
                                                    {today.max}
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
                                                    {today.min}
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

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'top'
                                    }}
                                >
                                    <Typography variant='h1'>
                                        {weather.temp}
                                    </Typography>
                                    <Typography variant='h3' sx={{ mt: 1.5 }}>
                                        °C
                                    </Typography>
                                </Box>
                                
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
                                        mt: '-16px'
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
                                        <Box
                                            sx={{
                                                margin: 'auto'
                                            }}
                                        >
                                            {weather.currently === 'dia' ? (
                                                <>
                                                    {weather.condition_slug === 'clear_day' && (
                                                        <img src={clear_day} alt='Tempo limpo' width='auto' height={100} />
                                                    )}
                                                    {weather.condition_slug === 'cloudly_day' && (
                                                        <img src={cloudly_day} alt='Tempo nublado' width='auto' height={100} />
                                                    )}
                                                    {weather.condition_slug === 'cloud' && (
                                                        <img src={cloud} alt='Nublado' width='auto' height={100} />
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {weather.condition_slug === 'cloudly_night' && (
                                                        <img src={cloudly_night} alt='Tempo nublado' width='auto' height={100} />
                                                    )}
                                                </>
                                            )}
                                        </Box>
                                        <Typography fontWeight={600} align='center'>
                                            {weather.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

                <Box
                    sx={{ mt: 'auto' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            px: 3,
                            height: '56px'
                        }}
                    >
                        {weather.currently === 'noite' ? (
                            <>
                                {weather.condition_slug !== 'rain' && (
                                    <Typography fontWeight={600}>
                                        Sem previsão de chuva para esta noite
                                    </Typography>
                                )}
                            </>
                        ) : (
                            <>

                            </>
                        )}
                    </Box>
                </Box>
            </TabPanel>
        </>
    )
}

export default Today