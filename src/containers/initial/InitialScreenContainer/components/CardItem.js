import * as React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import Avatar from '@material-ui/core/Avatar'
import TextTruncate from 'react-text-truncate'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MuiCollapse from '@material-ui/core/Collapse'
import MuiCard from '@material-ui/core/Card'
import MuiCardHeader from '@material-ui/core/CardHeader'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiCardActions from '@material-ui/core/CardActions'
import MuiCardMedia from '@material-ui/core/CardMedia'
import MuiIconButton from '@material-ui/core/IconButton'
import MuiButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import wanted from '../../../../assets/wanted.jpg'

const Container = styled.div`
  transition: all .5s ease-in-out;
  padding: 10px;
  text-align: center;
  justify-content: center;
  flex: 1;
`
const Card = styled(MuiCard)`
  width: 100%;
  height: 100%;
`
const CardHeader = styled(MuiCardHeader).attrs(() => ({
  titleTypographyProps: {
    style: {
      fontSize: 12
    }
  },
  subheaderTypographyProps: {
    style: {
      fontSize: 10
    }
  }
}))`
`
const CardMedia = styled(MuiCardMedia)`
  padding-top: 56.25%;
`
const CardContent = styled(MuiCardContent)`

`
const CardActions = styled(MuiCardActions)`

`
const IconButton = styled(MuiIconButton)`
  ${({theme}) => `
    margin-left: auto;
    transition: ${theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
})}
  `}
`
const Collapse = styled(MuiCollapse)`

`
const ApplyButton = styled(MuiButton)`
  width: 100%;
  min-height: 20px;
`
const CardItem = (props) => {
  const {
    item
  } = props
  const [expanded, setExpanded] = React.useState(false)
  
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  return (
    <Container
      style={{
        height: expanded ? 'auto' : 'fit-content'
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              J
            </Avatar>
          }
          title={
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={ item?.attributes?.title }
            />
          }
          subheader={
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={ item?.attributes?.pitch }
            />
          }
        />
        <CardMedia
          image={ item?.attributes?.picture?.standard || wanted }
        />
        {
          !isEmpty(item.tags) && (
            <CardContent>
              {
                map(item.tags, item => (
                  <Typography>
                    {item}
                  </Typography>
                ))
              }
            </CardContent>
          )
        }
        <CardActions>
          <IconButton
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            onClick={ handleExpandClick }
            aria-expanded={ expanded }
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={expanded}
          timeout='auto'
          unmountOnExit
        >
          <div
            dangerouslySetInnerHTML={{
              __html: item?.attributes?.body
            }}
          />
          <ApplyButton
            color='primary'
            onClick={ () => window.open(get(item.links, 'careersite-job-apply-iframe-url'))}
          >
            {item?.attributes.applyButtonText || 'Apply'}
          </ApplyButton>
        </Collapse>
      </Card>
    </Container>
  )
}

export default CardItem
