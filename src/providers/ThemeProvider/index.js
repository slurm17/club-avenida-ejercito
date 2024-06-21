import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import {createTheme} from '@mui/material'
const MyThemeProvider = ({ children }) => {
    const theme = createTheme()
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default MyThemeProvider
