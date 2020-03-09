import * as React from 'react'
import useStyles from './styles'
import AboutScreenContainer from '../../../containers/about/AboutScreenContainer'

const AboutScreen = () => {
  const classes = useStyles()
  return (
    <div className={ classes.container }>
      <AboutScreenContainer />
    </div>
  )
}

export default AboutScreen
