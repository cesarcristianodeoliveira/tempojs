import React from 'react'

import { useApiContext } from '../../contexts/ApiContext'

import { Grid, Box, Typography } from '@mui/material'
import StraightIcon from '@mui/icons-material/Straight'

import clear_day from '../../assets/weather/clear_day.png'
import cloudly_night from '../../assets/weather/cloudly_night.png'

import rain from '../../assets/weather/rain.png'

const Today = () => {

    const { weather, today } = useApiContext()

    return (
        <Box sx={{ px: 3, py: 2 }}>
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
                                {weather.condition_slug === 'clear_day' && (
                                    <img src={clear_day} alt='Chuva' width='auto' height={100} />
                                )}
                                {weather.condition_slug === 'rain' && (
                                    <img src={rain} alt='Chuva' width='auto' height={100} />
                                )}
                                {weather.condition_slug === 'cloudly_night' && (
                                    <img src={cloudly_night} alt='Tempo nublado' width='auto' height={100} />
                                )}
                            </Box>
                            <Typography fontWeight={600} align='center'>
                                {today.description}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Today