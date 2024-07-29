import { createTheme } from '@mui/material/styles'

export const returnTheme = () => {
  const colorPrimaryMain = 'red'
  const colorPrimaryContrastText = '#ffffff'
  const colorSecondaryMain = '#FEFE00'
  const colorText = '#000000'
  const colorError = '#d32f2f'
  const fontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif"
  const theme = createTheme({
    typography: {
      useNextVariants: true,
      fontFamily
    },
    // light y dark se generan automaticamente por lo que entendí(?
    // así que no hace falta definirlos, pero se pueden usar sin problemas
    // llamar al hook useTheme() y usar theme.pallete.primary.light para usarlos
    palette: {
      primary: {
        // light: colorPrimaryLight,
        main: colorPrimaryMain,
        // dark: colorPrimaryDark,
        contrastText: colorPrimaryContrastText
      },
      secondary: {
        main: colorSecondaryMain
      },
      text: {
        primary: colorText
      },
      error: {
        main: colorError
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 950,
        lg: 1280,
        xl: 1920
      }
    },
    shape: {
      borderRadius: 8
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          }
        }
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: colorSecondaryMain,
            fontWeight: 900
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-focused.Mui-error': {
              '&.MuiOutlinedInput-notchedOutline': {
                borderColor: colorError
              }
            },
            '&.Mui-focused': {
              '&.MuiOutlinedInput-notchedOutline': {
                borderColor: colorSecondaryMain
              }
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.MuiFormLabel-root.Mui-error': {
              '&.Mui-focused': {
                color: colorError
              }
            },
            '&.MuiFormLabel-root': {
              '&.Mui-focused': {
                color: colorSecondaryMain
              }
            }
          }
        }
      }
    },
    overrides: {
      MuiCssBaseline: {
        'html, body, #root': {
          // height: '100vh'
        },
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#ccc',
          borderRadius: '4px'
        },
        '*::-webkit-scrollbar-thumb:active': {
          backgroundColor: '#999999'
        },
        'button:focus': {
          outline: 'none'
        }
      },
      body: {
        margin: 0,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      MuiSnackbarContent: {
        action: {
          paddingLeft: 0
        },
        message: {
          padding: 0,
          width: '80%'
        }
      }
    }
  })

  return theme
}

export default returnTheme
