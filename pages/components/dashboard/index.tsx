import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Index() {
  return (
    <Flex justifyContent="center" >
      <Box boxSize='sm'  >
      <Text>Hello World</Text>
      </Box>
      <Box>
        <Text>Hello World</Text>
      </Box>
    </Flex>
  )
}

export default Index