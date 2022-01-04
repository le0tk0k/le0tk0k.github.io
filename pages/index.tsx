import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import Container from 'components/container'
import Post from 'components/post'
import Meta from 'components/meta'
import { postFilePaths, POSTS_PATH } from 'utils/mdx'

interface HomeProps {
  posts: any
}

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Meta url='/' />
      <Container>
        {posts.map((post) => (
          <Post key={post.data.title} {...post} />
        ))}
      </Container>
    </>
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
