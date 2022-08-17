import React from 'react'

import { useApiContext } from '../../contexts/ApiContext'

import { Grid, Box, Typography } from '@mui/material'
import StraightIcon from '@mui/icons-material/Straight'

import rain from '../../assets/weather/rain.png'

const Tomorrow = () => {

    const { weather, tomorrow } = useApiContext()

    return (
        <Box sx={{ px: 3, py: 2 }}>
            <Grid container spacing={2}>

                <Grid item xs={6}>

                    <Typography color='text.secondary' fontWeight={600}>{weather.date}</Typography>

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
                    xs={6}
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
                                <img src={rain} alt='Chuva' width='auto' height={86} />
                            )}
                            {tomorrow.condition === 'rain' && (
                                <img src={rain} alt='Chuva' width='auto' height={86} />
                            )}
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Tomorrow