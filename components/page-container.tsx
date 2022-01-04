import * as React from 'react'
import Container from 'components/container'
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
    <Container>
      <chakra.h1 apply='mdx.title'>{title}</chakra.h1>
      {children}
    </Container>
  )
}

export default PageContainer
