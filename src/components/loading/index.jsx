import { CssBaseline, Box, CircularProgress, Typography } from "@mui/material"

const Loading = () => {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                <CircularProgress />
                <Typography color='text.secondary' sx={{ mt: 2 }}>Carregando</Typography>
            </Box>
        </>
    )
}

export default Loading