import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import ColorModeSwitcher from '../ColorModeSwitcher'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'2'} bg={'blackAlpha.900'} color={'white'} pos={'sticky'} top={'0'} zIndex={'450'}>
      <ColorModeSwitcher />
      <Button variant={'unstyled'} transition={"all 0.5s"} css={{
        "&:hover": {
          color: "grey"
        }
      }}>
        <Link to='/home'>Home</Link>
      </Button>
      <Button variant={'unstyled'} transition={"all 0.5s"} css={{
        "&:hover": {
          color: "grey"
        }
      }}>
        <Link to='/showdata'>Showdata</Link>
      </Button>


    </HStack>

  )
}

export default Header
