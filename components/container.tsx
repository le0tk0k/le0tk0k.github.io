import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Header from 'components/header'
import Footer from 'components/footer'

interface ContainerProps {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <>
      <Header />
      <Box as='main' w='full' maxW='2xl' mx='auto' px='6' pt='20'>
        <Box minH='100vh'>{props.children}</Box>
        <Box pt='14'>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Container
