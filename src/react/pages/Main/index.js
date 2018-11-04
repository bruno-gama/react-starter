// @flow
import React from 'react'
import { Box, Heading } from 'rebass'

import Header from '../../components/Header'
import Dude from '../../components/Dude'
import { withResource } from '../../HOCs/withResource' 
import fakeResource from '../../../resources/fakeResource'

const ResourcefulDude = withResource(fakeResource.get)(Dude)

const Main = () => (
  <React.Fragment>
    <Header />
    <Box px={4} py={5}>
      <Heading color="teal" is="h4">
        You can add your things here
      </Heading>

      <ResourcefulDude />
    </Box>
  </React.Fragment>
)

export default Main
