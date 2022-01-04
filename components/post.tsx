import NextLink from 'next/link'
import { chakra, Flex, Text } from '@chakra-ui/react'

interface PostProps {
  data: any
  filePath: string
}

const Post = ({ data, filePath }: PostProps) => {
  const { title, date } = data
  return (
    <NextLink
      as={`/posts/${filePath.replace(/\.mdx?$/, '')}`}
      href={`/posts/[slug]`}
      passHref
    >
      <chakra.a display='block' aria-label={`Go to ${title}`}>
        <Flex
          justify='space-between'
          borderBottomStyle='dashed'
          borderBottomWidth='1px'
          py='2'
        >
          <chakra.h1 fontSize='lg' fontWeight='semibold'>
            {title}
          </chakra.h1>
          <Text>
            {new Date(date).toDateString().split(' ').slice(1).join(' ')}
          </Text>
        </Flex>
      </chakra.a>
    </NextLink>
  )
}

export default Post
