import { 
  Badge, 
  Box, 
  Flex, 
  Heading, 
  Image, 
  LinkBox, 
  LinkOverlay, 
  Text, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure, 
} from '@chakra-ui/react'
import React from 'react'


const CardPokemons = ({name, imagem, types, agil, id}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()   
    const typepoke = () => {
        if(types[1]){
            return types[0].type.name+" / "+types[1].type.name
        }
        return types[0].type.name
    }
    const forca = () => { if(agil[0]){ return agil[0].base_stat}}
    const ataque = () => { if(agil[1]){ return agil[1].base_stat}}
    const defesa = () => { if(agil[2]){ return agil[2].base_stat}}
    const agilidade = () => { if(agil[5]){ return agil[5].base_stat}}
    

  return (
    <>            
      <Button onClick={onOpen}>
        {name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {name} {id}
            <Image borderRadius="5px" border="1px solid #dfdfdf" height="100px" width="120px" src={imagem} alt='Image' display="inline-block" />

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as='span' color='gray.600' fontSize='sm'>
              <Text fontSize={'10px'} color='blue'>Força:{forca()}</Text>
              <Text fontSize={'10px'} color='red'>Ataque: {ataque()} </Text> 
              <Text fontSize={'10px'} color=''>Defesa: {defesa()} </Text> 
              <Text fontSize={'10px'} color='green'>Agilidade: {agilidade()} </Text>  
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>{typepoke()}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
            
            
{/*             
            <Box maxW='sm' bg='#FFF' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems={'center'} justifyContent='center' display='flex'>
              <Image borderRadius="5px" border="1px solid #dfdfdf" height="100px" width="120px" src={imagem} alt='Image' display="inline-block" />

              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    Pokémons
                  </Badge>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Box
                  mt='1'
                  fontWeight='bold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {name}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    <Text fontSize={'10px'} color='blue'>Força:{forca()}</Text>
                    <Text fontSize={'10px'} color='red'>Ataque: {ataque()} </Text> 
                    <Text fontSize={'10px'} color=''>Defesa: {defesa()} </Text> 
                    <Text fontSize={'10px'} color='green'>Agilidade: {agilidade()} </Text>  
                  </Box>
                </Box>

                
                  <Box as='span' ml='2' color='#000' fontSize='sm'>
                    {typepoke()}
                  </Box>
                </Box>
              </Box> */}
            


            {/* <LinkBox boxShadow="0 0 10px rgba(0,0,0,.15)" height="195" position="relative" p="10px 10px 10px 30px" css={{  'box-shadow': '0 0 10px rgba(0,0,0,.15)' }} bg="#fff" borderRadius="20"
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
            </LinkBox> */}
    </>
  )
}

export default CardPokemons;