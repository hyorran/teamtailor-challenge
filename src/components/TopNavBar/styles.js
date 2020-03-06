import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    border: '1px solid red',
    width: '100%'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green'
  }
}))

export default useStyles
