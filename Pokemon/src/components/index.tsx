import { Box, Container, Image, Heading, Select, SimpleGrid, Text, LinkBox, LinkOverlay, Flex, Input } from '@chakra-ui/react'

const ModalPoke = () => {
   
  return (
    <>
      <Box w='250px' h='300px' bg='red' border={'solid 2px #000'} borderRadius='15px'>
        <Box bg='blue' m='20px' borderRadius={'14px'} display='flex' justifyContent='center' alignItems='center'>
        <Text color='#000'>Nome do Pokemon</Text>
        </Box>
        <Box bg='blue' m='20px' borderRadius={'14px'} display='flex' justifyContent='center' alignItems='center'>
        <Text color='#000'>Nome do Pokemon</Text>
        </Box>
      </Box>
    </>
  )
}

export default ModalPoke
