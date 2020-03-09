import * as React from 'react'
import map from 'lodash/map'
import find from 'lodash/find'
import get from 'lodash/get'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CardItem from './components/CardItem'
import Loader from '../../../components/Loader'

const ContainerComponent = styled.div`
  flex: 1;
  grid-row-gap: 10px;
  grid-column: span 3;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
const ContainerContent = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  grid-gap: 10px;
  min-height: 220px;
  width: 100%;
  height: 100%;
`

const InitialScreenContainer = () => {
  const {
    jobs,
    loading
  } = useSelector((state) => state.jobs)

  return (
    <ContainerComponent>
      {
        loading ? (
          <Loader />
        ) : (
          <ContainerContent>
            {
              map(jobs?.data, (item) => (
                <CardItem
                  key={ item.id }
                  item={ item }
                  title={ item.attributes?.title }
                  subHeader={ item.attributes?.pitch }
                  location={
                    get(find(jobs?.included,
                      (i) => find(item.relationships?.locations?.data,
                        (inclItem) => inclItem.id === i.id)), 'attributes.city')
                  }
                  picture={
                    get(find(jobs?.included,
                      (i) => item.relationships?.user?.data?.id === i.id), 'attributes.picture.standard')
                  }
                  department={
                    get(find(jobs?.included,
                      (i) => item.relationships?.department?.data?.id === i.id), 'attributes.name')
                  }
                />
              ))
            }
          </ContainerContent>
        )
        }
    </ContainerComponent>
  )
}

export default InitialScreenContainer
