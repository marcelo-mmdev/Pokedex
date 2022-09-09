import { Box, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'


const CardPokemons = ({name, imagem, types}) => {
    
    const typepoke = () => {
        if(types[1]){
            return types[0].type.name+" / "+types[1].type.name
        }
        return types[0].type.name
    }

  return (
    <>
        <LinkBox boxShadow="0 0 10px rgba(0,0,0,.15)" height="195" position="relative" p="10px 10px 10px 30px" css={{  'box-shadow': '0 0 10px rgba(0,0,0,.15)' }} bg="#fff" borderRadius="20"
               _before={{ top: '10px', left: '12px', position: 'absolute', content: '" "', display: 'block', width: '5px', height: '180px', background: 'green', 'border-radius': '5px' }}>
              <Flex display={'flex'} gap={'10px'}>
                <Image borderRadius="5px" border="1px solid #dfdfdf" height="100px" width="120px" src={imagem}
                  alt='Image' display="inline-block"/>
                <Heading fontSize="15px" lineHeight="20px" css={{ display: '-webkit-box', 'max-width': '100%', '-webkit-line-clamp': '5', '-webkit-box-orient': 'vertical', 'text-overflow': 'ellipsis', overflow: 'hidden' }} height="100px" as="h3">
                    <LinkOverlay href='/'>
                        {name}
                    </LinkOverlay>
                </Heading>
              </Flex>
              <Flex display={'flex'} gap={'10px'} mt={'12px'}>
                <Box fontSize={'12px'} height="65px" lineHeight="65px" w="90px" bg="#CCF0D3" color="#07721A" textAlign="center" borderRadius={'10px'}>
                    <Text as="span" css={{ display: 'inline-block', 'vertical-align': 'middle', 'line-height': 'normal' }}>
                        
                    </Text>
                </Box>
                <Box textAlign="center" w={'100%'}>
                  <Box height="40px" lineHeight="40px" bg="#F0F0F0" textAlign="center" w={'100%'} borderRadius="10px 10px 0 0" fontWeight="bold" fontSize={'12px'}>
                     {typepoke()}
                  </Box>

                  <Box mt="2px" fontSize="13px" height="23px" lineHeight="23px" fontWeight="bold" bg={'blue'} color="#DD0000" borderRadius="0 0 10px 10px">
                    
                  </Box>
                </Box>
              </Flex> 
            </LinkBox>
    </>
  )
}

export default CardPokemons;