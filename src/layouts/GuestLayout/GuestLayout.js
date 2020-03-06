import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'
import TopNavBar from '../../components/TopNavBar'

const GuestLayout = (props) => {
  const {
    children
  } = props
  const classes = useStyles()

  return (
    <div className={ classes.container }>
      <TopNavBar />
      <div
        className={ classes.contentScroll }
      >
        {children}
      </div>
    </div>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default GuestLayout
