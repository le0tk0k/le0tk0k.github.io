import * as Chakra from '@chakra-ui/react'
import Code from './code'

const { Box, chakra } = Chakra

export const MdxComponents = {
  ...Chakra,
  h1: (props) => <chakra.h1 apply='mdx.h1' {...props} />,
  h2: (props) => <chakra.h1 apply='mdx.h2' {...props} />,
  h3: (props) => <chakra.h1 apply='mdx.h3' {...props} />,
  p: (props) => <chakra.p apply='mdx.p' {...props} />,
  a: (props) => <chakra.a apply='mdx.a' {...props} />,
  strong: (props) => <Box as='strong' fontWeight='semibold' {...props} />,
  hr: (props) => <chakra.hr apply='mdx.hr' {...props} />,
  ul: (props) => <chakra.ul apply='mdx.ul' {...props} />,
  ol: (props) => <chakra.ol apply='mdx.ul' {...props} />,
  li: (props) => <chakra.li {...props} />,
  blockquote: (props) => (
    <chakra.blockquote apply='mdx.blockquote' {...props} />
  ),
  inlineCode: (props) => <chakra.code apply='mdx.code' {...props} />,
  code: Code,
  table: (props) => (
    <chakra.div overflowX='auto'>
      <chakra.table mt='1.25rem' width='full' {...props} />
    </chakra.div>
  ),
  th: (props) => (
    <chakra.th
      color='aurora.200'
      fontWeight='semibold'
      p={2}
      borderStyle='dashed'
      borderWidth='1px'
      borderColor='aurora.200'
      {...props}
    />
  ),
  td: (props) => (
    <chakra.td
      p={2}
      borderStyle='dashed'
      borderWidth='1px'
      borderColor='aurora.200'
      whiteSpace='normal'
      {...props}
    />
  ),
}
