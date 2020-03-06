import * as React from 'react'
import { Link } from 'react-router-dom'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './styles'
import Button from '@material-ui/core/Button'

const TopNavBar = () => {
  const classes = useStyles()
  return (
    <header className={ classes.container }>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={ <ExpandMoreIcon /> }
          className={ classes.buttonsContainer }
        >
          <Avatar>HP</Avatar>
          <Link to="Initial">Home</Link>
          <Link to="About">About</Link>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button>
            Logout
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </header>
  )
}

export default TopNavBar
