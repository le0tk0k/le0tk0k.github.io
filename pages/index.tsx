import type { NextPage } from 'next'
import Link from 'next/link'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import Container from 'components/container'
import Post from 'components/post'
import { postFilePaths, POSTS_PATH } from 'utils/mdx'

const Home: NextPage = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.data.title} {...post} />
      ))}
    </Container>
  )
}

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)

      return {
        data,
        filePath,
      }
    })
    .sort(
      (x, y) => Number(new Date(y.data.date)) - Number(new Date(x.data.date)),
    )

  return { props: { posts } }
}

export default Home
