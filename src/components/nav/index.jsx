import React from 'react'

import './style.css'

import { useApiContext } from '../../contexts/ApiContext'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useSlideContext } from '../../contexts/SlideContext'
import { useSearchContext } from '../../contexts/SearchContext'

import { AppBar, Toolbar } from '@mui/material'

import { Box, InputBase, IconButton, Avatar } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { Tabs, Tab } from '@mui/material'

import { Search } from '../../components'

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        cursor: 'pointer'
    },
    '& .MuiInputBase-input.Mui-disabled': {
        WebkitTextFillColor: '#FFF'
    },
}));

const Nav = () => {

    const { weather, loading } = useApiContext()
    const { mode, toggleMode } = useThemeContext()
    const { slideValue, handleSlideValue } = useSlideContext()

    const { handleOpenSearch } = useSearchContext()

    return (
        <>
            {!loading && (
                <>
                    <AppBar position='fixed' elevation={0}>
                        <Toolbar sx={{ minHeight: '64px!important' }}>
                            <SearchContainer>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <Box onClick={handleOpenSearch}>
                                <StyledInputBase
                                    value={weather.city ? weather.city : 'Local atual'}
                                    inputProps={{ 'aria-label': 'search' }}
                                    disabled={true}
                                />
                                </Box>
                            </SearchContainer>

                            <Box flexGrow={1} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: 1.85
                                }}
                            >
                                <IconButton
                                    color='inherit'
                                    onClick={toggleMode}
                                >
                                    {mode ? <DarkModeIcon /> : <LightModeIcon />}
                                </IconButton>
                                <IconButton
                                    color='inherit'
                                >
                                    <Avatar
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            color: 'inherit'
                                        }}
                                    />
                                </IconButton>
                            </Box>

                        </Toolbar>

                            <Tabs 
                                value={slideValue}
                                onChange={handleSlideValue}
                                variant='fullWidth'
                            >
                                <Tab label='Hoje' sx={{ color: '#FFF!important' }} />
                                <Tab label='Amanhã' sx={{ color: '#FFF!important' }} />
                                <Tab label='10 Dias' sx={{ color: '#FFF!important' }} />
                            </Tabs>
                    </AppBar>

                    <Search />
                </>
            )}
        </>
    )
}

export default Nav