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
            >
                <AppBar 
                    position='relative' 
                    elevation={0}
                    sx={{
                        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 4%), 0px 1px 3px 0px rgb(0 0 0 / 3%)'
                    }}    
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            minHeight: 'auto!important',
                            py: 1
                        }}
                    >
                        <IconButton
                            onClick={handleCloseSearch}
                        >
                            <ArrowBackIcon 
                                sx={{
                                    color: 'rgba(0, 0, 0, .75)'
                                }}
                            />
                        </IconButton>

                        <TextField
                            id='input-search'
                            fullWidth
                            size='small'
                            placeholder='Pesquisar lugares'
                            sx={{
                                ml: 2
                            }}
                        />
                    </Toolbar>
                </AppBar>

                <Box sx={{ px: 3, py: 2 }}>
                    <Typography color='text.secondary'>
                        Em desenvolvimento...
                    </Typography>
                </Box>
            </Dialog>
        </>
    )
}

export default Search