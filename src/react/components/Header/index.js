import React from 'react'
import styled from 'styled-components'
import { Heading, Box } from 'rebass'

const Header = () => (
  <Box px={4} py={5} color="white" bg="teal">
    <Heading is="h1" fontSize={[4, 5, 6]}>
      You are beautiful
    </Heading>
    <Heading is="h2" fontSize={[3, 4, 5]}>
      Have a nice day
    </Heading>
  </Box>
)

export default Header
