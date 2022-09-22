import React from 'react'
import { useRouter } from 'next/router'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

const ModalPoke = (name, imagem, types, agil) => {

  const router = useRouter()
  const { id } = router.query

  const { isOpen, onOpen, onClose } = useDisclosure()

  const typepoke = () => {
    if(types[1]){
        return types[0].type.name+" / "+types[1].type.name
    }
    return types[0].type.name
}

const forca = () => {
  if(agil[0]){ return agil[0].base_stat}    
}
const ataque = () => {
  if(agil[1]){ return agil[1].base_stat}    
}
const defesa = () => {
  if(agil[2]){ return agil[2].base_stat}    
}
const agilidade = () => {
  if(agil[5]){ return agil[5].base_stat}    
}

  return (
    <>
      <Button onClick={onOpen}>{name}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
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

    </>
  )
}


export default ModalPoke