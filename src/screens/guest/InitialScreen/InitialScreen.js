import * as React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'
import { Types } from '../../../store/ducks/jobs'
import { useDispatch, useSelector } from 'react-redux'
import InitialScreenContainer from '../../../containers/initial/InitialScreenContainer'

const InitialScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs)
  React.useEffect(() => {
    dispatch({
      type: Types.REQUEST_JOBS
    })
  }, [dispatch])
  
  return (
    <div className={ classes.container }>
      <InitialScreenContainer />
    </div>
  )
}

InitialScreen.propTypes = {}
InitialScreen.defaultProps = {}

export default InitialScreen
