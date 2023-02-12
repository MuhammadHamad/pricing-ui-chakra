'use client'
import Image from 'next/image'
import { ChakraProvider, Heading, Stack, Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Header from './Header'
import Pricing from './Pricing'
import Features from './Features'

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
