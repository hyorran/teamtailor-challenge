import * as React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'

import useStyles from './styles'

const Container = styled.header`
  width: 100%;
`
const ExpansionPanel = styled(MuiExpansionPanel)`

`
const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
  ${({theme}) => `
    background-color: ${theme.palette.primary.dark}
  `}
`

const TopNavBar = (props) => {
  const {
    history
  } = props
  const classes = useStyles()
  
  const handlePageSelected = (page) => {
    history.push(page)
  }
  return (
    <Container>
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
    </Container>
  )
}

TopNavBar.propTypes = {
  history: PropTypes.object
}
TopNavBar.defaultProps = {
  history: {}
}

export default withRouter(TopNavBar)
