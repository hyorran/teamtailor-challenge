import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from './store'

const StoreProvider = ({ children }) => (
  <Provider store={ store }>
    {children}
  </Provider>
)

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

export default StoreProvider
