import * as React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'
import MuiAvatar from '@material-ui/core/Avatar'
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
      fontSize: 12,
      fontWeight: 800
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
  flex-direction: row;
  justify-content: flex-start;
  text-align: justify;
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
const Avatar = styled(MuiAvatar)`
  ${({theme}) => `
    border: 2px solid ${theme.palette.primary.main}
  `}
`
const CardItem = (props) => {
  const {
    item,
    title,
    subHeader,
    location,
    picture
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
            <Avatar
              src={ picture }
            />
          }
          title={
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={ title.toUpperCase() }
            />
          }
          subheader={
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={ subHeader }
            />
          }
        />
        <CardMedia
          image={ item?.attributes?.picture?.standard || wanted }
        />
        <CardContent>
          {
            map(item.tags, item => (
              <Typography>
                {item}
              </Typography>
            ))
          }
          <Typography>
            Location: {location || 'Not specified'}
          </Typography>
        </CardContent>
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
