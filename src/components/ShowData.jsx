import React from 'react'
import { Container, Heading, HStack, VStack, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const ShowData = ({ shows }) => {
  return (
    <Container maxW={'container.xl'} >
      <>
        <HStack wrap={'wrap'} justifyContent={'space-between'} >
          {shows.map(i => (

            <div key={i.show.id}>

              <VStack w={'72'} p={20} fontFamily={'cursive'} borderRadius={'lg'} shadow={'lg'}
                m={'4'} transition={"all 0.5s"} css={{
                  "&:hover": {
                    transform: "scale(1.1)"
                  }
                }}>

                <Heading size={'md'} noOfLines={1}>{i.show.name}</Heading>
                <Text noOfLines={1}>{i.show.genres[0]}</Text>

                <Text noOfLines={1} paddingBottom={'8'}>Language:{i.show.language}</Text>
                <Button variant={'unstyled'} bg={'blackAlpha.700'} paddingLeft={'5'} paddingRight={'5'} color={'white'} transition={"all 0.5s"} css={{
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white"
                  }
                }}  >
                  <Link to='/summary' state={{ shows: i.show.summary }}>Summary</Link>
                </Button>
              </VStack>
            </div>

          ))}


        </HStack>

      </>
    </Container>
  )
}

export default ShowData
