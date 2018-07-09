// @flow
import React from 'react'
import { Box, Heading } from 'rebass'

import Header from '../../components/Header'

const Main = () => (
  <React.Fragment>
    <Header />
    <Box px={4} py={5}>
      <Heading color="teal" is="h4">
        You can add your things here
      </Heading>
    </Box>
  </React.Fragment>
)

export default Main
