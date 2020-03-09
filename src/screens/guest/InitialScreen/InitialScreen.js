import * as React from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { Types } from '../../../store/ducks/jobs'
import InitialScreenContainer from '../../../containers/initial/InitialScreenContainer'

const InitialScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
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
