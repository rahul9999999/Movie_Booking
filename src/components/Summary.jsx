import { Button, Container, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Summary = () => {
  const location = useLocation();
  console.log(location.state, 'useLocation')
  return (
    <Container maxW={'container.xl'}>
      <VStack w={'100%'} p={20} fontFamily={'cursive'} h={'45rem'} borderRadius={'lg'} shadow={'lg'} m={'4'} justifyContent={'center'} fontSize={'3xl'}  >
        <Text dangerouslySetInnerHTML={{ __html: location.state.shows }} paddingBottom={'8'}></Text>
        <Button variant={'unstyled'} bg={'blackAlpha.700'} paddingLeft={'5'} paddingRight={'5'} paddingBottom={'12'} paddingTop={'5'} transition={"all 0.5s"} css={{
          "&:hover": {
            backgroundColor: "red",
            color: "white"
          }
        }}>
          <Link to='/showdata' >Book a movie ticket</Link>
        </Button>

      </VStack>



    </Container>
  )
}

export default Summary
