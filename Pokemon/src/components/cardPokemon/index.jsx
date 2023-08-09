import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFire } from "react-icons/bs";
import { MdWaterDrop } from "react-icons/md";

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
        maxW="250px"
        border="1px"
        borderColor="secondary.900"
        borderRadius="lg"
        // overflow="hidden"
      >
        <Box
          h="20px"
          m="1"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box />
          {/* <Box
            h="20px"
            w="20px"
            // m="1px"
            border="1px"
            borderRadius="50%"
            // color="red"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="10px">{id}</Box>
          </Box> */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="1"
          >
            <Icon
              as={BsFire}
              h="20px"
              w="20px"
              p="1px"
              border="1px"
              borderRadius="50%"
              color="red"
            />
            <Icon
              as={MdWaterDrop}
              h="20px"
              w="20px"
              p="1px"
              border="1px"
              borderRadius="50%"
              color="blue"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="2"
          m="2"
          gap="3"
          border="1px"
          borderRadius="8"
          // bgColor="secondary.300"
        >
          <Box pt="0">
            <Image src={imagem} w="130px" h="180px" />
          </Box>
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
          <Box display="block">
            <Text fontSize="10px">{typepoke()}</Text>
            <Text as="b" fontSize="16px">
              {name}
            </Text>
          </Box>
        </Box>

        <Box p="5">
          {/* <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            mb="3"
          >
            {typepoke()}
          </Box> */}

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
