import * as React from 'react'
import ScreenRouter from './screens/ScreenRouter'
import StoreProvider from '../src/store/StoreProvider'
import styled, { ThemeProvider } from 'styled-components'
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core'

const myTheme = createMuiTheme()

const App = () => (
    <StoreProvider>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={myTheme}>
          <ThemeProvider theme={myTheme}>
            <ScreenRouter />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </StoreProvider>
)


export default App
