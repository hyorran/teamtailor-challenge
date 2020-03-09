import * as React from 'react'
import ScreenRouter from './screens/ScreenRouter'
import StoreProvider from '../src/store/StoreProvider'
import { ThemeProvider } from 'styled-components'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import theme from './assets/style/theme'


const App = () => (
    <StoreProvider>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <ScreenRouter />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </StoreProvider>
)


export default App
