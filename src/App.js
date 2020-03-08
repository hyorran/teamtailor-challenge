import * as React from 'react'
import ScreenRouter from './screens/ScreenRouter'
import StoreProvider from '../src/store/StoreProvider'
const App = () => (
  <StoreProvider>
    <ScreenRouter />
  </StoreProvider>
)

export default App
