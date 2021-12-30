import type { NextPage } from 'next'
import Header from 'components/header'
import Footer from 'components/footer'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box h='100vh' />
      <Footer />
    </>
  )
}

export default Home
