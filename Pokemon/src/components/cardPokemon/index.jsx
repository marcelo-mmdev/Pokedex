import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardPokemon = ({ name, imagem, types, id, stats }) => {
  const typepoke = () => {
    if (types[1]) {
      return types[0].type.name + "  /  " + types[1].type.name;
    }
    return types[0].type.name;
  };
  const forca = () => {
    if (stats[0]) {
      return stats[0].base_stat;
    }
  };
  const ataque = () => {
    if (stats[1]) {
      return stats[1].base_stat;
    }
  };
  const defesa = () => {
    if (stats[2]) {
      return stats[2].base_stat;
    }
  };
  const agilidade = () => {
    if (stats[5]) {
      return stats[5].base_stat;
    }
  };

  return (
    <>
      <Box
        maxW="sm"
        border="1px"
        borderColor="secondary.900"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="2"
          // bgColor="secondary.300"
        >
          <Image src={imagem} w="130px" h="180px" />
        </Box>

        <Box
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          noOfLines={1}
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          gap="2"
          p="2"
          fontSize="18px"
        >
          {/* <Badge borderRadius="full" px="3" colorScheme="blue">
            {id}
          </Badge> */}
          <Text>{name}</Text>
        </Box>

        <Box p="5">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            mb="3"
          >
            {typepoke()}
          </Box>

          <Box>
            <Box>
              <Text>Força: {forca()}</Text>
            </Box>
            <Box>
              <Text>Ataque: {ataque()}</Text>
            </Box>
            <Box>
              <Text>Defesa: {defesa()}</Text>
            </Box>
            <Box>
              <Text>Agilidade: {agilidade()}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardPokemon;
