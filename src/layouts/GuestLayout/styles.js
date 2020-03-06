import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  contentScroll: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    minHeight: '100%'
  }
}))

export default useStyles
