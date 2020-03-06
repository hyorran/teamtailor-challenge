import { lazy } from 'react'

const InitialScreen = lazy(() => import('../screens/guest/InitialScreen'))
const AboutScreen = lazy(() => import('../screens/guest/AboutScreen'))

const routes = {
  initial: {
    path: '/',
    exact: true,
    Component: InitialScreen
  },
  about: {
    path: '/about',
    exact: true,
    Component: AboutScreen
  }
}

export default routes
