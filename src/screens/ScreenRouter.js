import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GuestScreenRouter from './guest/GuestScreenRouter'


const ScreenRouter = () => (
  <Router forceRefresh>
    <Suspense fallback={ <div /> }>
      <GuestScreenRouter />
    </Suspense>
  </Router>
)

export default ScreenRouter
