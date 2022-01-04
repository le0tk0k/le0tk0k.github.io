import * as React from 'react'
import Container from 'components/container'
import { Box, chakra, Text, useColorModeValue } from '@chakra-ui/react'

interface PageContainerProps {
  frontmatter: {
    title: string
    date: string
  }
  children: React.ReactNode
}

const PageContainer = (props: PageContainerProps) => {
  const { frontmatter, children } = props
  const { title, date } = frontmatter

  return (
    <Container>
      <Box mb='4rem'>
        <chakra.h1 apply='mdx.title'>{title}</chakra.h1>
        <Text color='rgb(208, 135, 112, 0.8)'>{date}</Text>
      </Box>
      {children}
    </Container>
  )
}

export default PageContainer
