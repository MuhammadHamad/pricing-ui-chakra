import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Box textAlign={{ base: "left", md: "center" }} bg="#ea4c57" pl={"15px"} pt={"40px"} pb={"190px"} color="white" height={"auto"}>
      <Heading>Simple pricing for your business</Heading>
      <Text pt={"16px"}>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}

export default Header