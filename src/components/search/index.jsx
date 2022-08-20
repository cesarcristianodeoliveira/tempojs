import React, { forwardRef } from 'react';

import { useSearchContext } from '../../contexts/SearchContext'

import { Slide, Dialog } from '@mui/material'

import { AppBar, Toolbar, IconButton, TextField } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Box, Typography } from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
})

const Search = () => {

    const { openSearch, handleCloseSearch } = useSearchContext()

    return (
        <>
            <Dialog
                fullScreen
                open={openSearch}
                onClose={handleCloseSearch}
                TransitionComponent={Transition}
                sx={{
                    boxShadow: 'none'
                }}
            >
                <AppBar 
                    position='fixed' 
                    elevation={0}    
                >
                    <Toolbar
                        sx={{
                            minHeight: '64px!important',
                        }}
                    >
                        <IconButton
                            onClick={handleCloseSearch}
                            color='inherit'
                        >
                            <ArrowBackIcon />
                        </IconButton>

                        <TextField
                            id='input-search'
                            fullWidth
                            size='small'
                            placeholder='Pesquisar lugares'
                            sx={{
                                ml: 1.85
                            }}
                        />
                    </Toolbar>
                </AppBar>

                <Box
                    sx={{
                        pt: '64px'
                    }}
                >
                    <Box sx={{ px: 3, py: 2 }}>
                        <Typography color='text.secondary'>
                            Em desenvolvimento por Cesar Oliveira
                        </Typography>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Search