import * as React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'

import useStyles from './styles'

const TopNavBar = (props) => {
  const {
    history
  } = props
  const classes = useStyles()
  
  const handlePageSelected = (page) => {
    history.push(page)
  }
  return (
    <header className={ classes.container }>
      <ExpansionPanel
        defaultExpanded
      >
        <ExpansionPanelSummary
          expandIcon={ <ExpandMoreIcon /> }
        >
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='flex-start'
          >
            <Avatar>HP</Avatar>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            className={ classes.buttonsContainer }
          >
            <Button
              color='primary'
              aria-label='contained primary'
              onClick={ () => handlePageSelected('/') }
            >
              Home
            </Button>
            <Button
              onClick={ () => handlePageSelected('/about') }
            >
              About
            </Button>
          </Grid>
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

TopNavBar.propTypes = {
  history: PropTypes.object
}
TopNavBar.defaultProps = {
  history: {}
}

export default withRouter(TopNavBar)
