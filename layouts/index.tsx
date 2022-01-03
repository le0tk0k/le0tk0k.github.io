import * as chakraComponents from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { MdxComponents } from 'components/mdx'
import PageContainer from 'components/page-container'
import * as React from 'react'

export function MDXLayoutProvider({ children }) {
  return (
    <MDXProvider components={{ ...chakraComponents, ...MdxComponents }}>
      {children}
    </MDXProvider>
  )
}

interface MDXLayoutProps {
  frontmatter: any
  children: React.ReactNode
}

export default function MDXLayout(props: MDXLayoutProps) {
  const { frontmatter, children } = props

  return (
    <MDXLayoutProvider>
      <PageContainer frontmatter={frontmatter}>{children}</PageContainer>
    </MDXLayoutProvider>
  )
}
