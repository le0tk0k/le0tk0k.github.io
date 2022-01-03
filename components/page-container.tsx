import * as React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { Box, chakra, useColorModeValue } from '@chakra-ui/react'

interface PageContainerProps {
  frontmatter: {
    title: string
  }
  children: React.ReactNode
}

const PageContainer = (props: PageContainerProps) => {
  const { frontmatter, children } = props
  const { title } = frontmatter

  return (
    <>
      <Header />
      <Box as='main' w='full' maxW='2xl' mx='auto' px='6' pt='20'>
        <chakra.h1 apply='mdx.title'>{title}</chakra.h1>
        {children}
        <Box pt='14'>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default PageContainer
