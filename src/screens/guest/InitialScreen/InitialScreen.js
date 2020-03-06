import * as React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'

const InitialScreen = () => {
  const classes = useStyles()
  return (
    <div className={ classes.container }>
      initial screen
    </div>
  )
}

InitialScreen.propTypes = {}
InitialScreen.defaultProps = {}

export default InitialScreen
