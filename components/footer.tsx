import { Box, Text } from '@chakra-ui/react'
import siteConfig from 'config/site-config'

const Footer = () => {
  return (
    <Box as='footer' py='6' textAlign='center'>
      <Text>{siteConfig.copyright}</Text>
    </Box>
  )
}

export default Footer
