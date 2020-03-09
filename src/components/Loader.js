import * as React from 'react'
import MuiCircularProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

const Container = styled(MuiCircularProgress)`
  width: 100%;
  padding-top: 2px;
`
const Loader = () => <Container />

export default Loader
