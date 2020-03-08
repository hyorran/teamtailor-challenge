import * as React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'
import { Types } from '../../../store/ducks/jobs'
import { useDispatch, useSelector } from 'react-redux'

const InitialScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs)
  React.useEffect(() => {
    dispatch({
      type: Types.REQUEST_JOBS
    })
  }, [dispatch])
  console.warn(jobs)
  return (
    <div className={ classes.container }>
      initial screen
    </div>
  )
}

InitialScreen.propTypes = {}
InitialScreen.defaultProps = {}

export default InitialScreen
