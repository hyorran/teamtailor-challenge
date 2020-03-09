import * as React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Container = styled.header`
  width: 100%;
`
const ExpansionPanel = styled(MuiExpansionPanel)`

`
const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
  ${ ({ theme }) => `
    background-color: ${ theme.palette.primary.dark }
  ` }
`
const Title = styled(Typography)`
  font-size: 24px;
  color: white;
`
const ButtonsContainer = styled(Grid)`

`

const TopNavBar = (props) => {
  const {
    history
  } = props

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
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Avatar>HP</Avatar>
            <Title>
              Jobs Available
            </Title>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ButtonsContainer
            container
            direction="row"
            justify="space-between"
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={ () => handlePageSelected('/') }
            >
              Home
            </Button>
            <Button
              onClick={ () => handlePageSelected('/about') }
            >
              About
            </Button>
          </ButtonsContainer>
        </ExpansionPanelDetails>
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
