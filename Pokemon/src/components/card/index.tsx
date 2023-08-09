import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { BsFire } from "react-icons/bs";
import { MdWaterDrop } from "react-icons/md";

interface ICardProps {
  name: string;
  image: string;
  exp: string;
  ids: string;
  tipos: [];
}

const Card: FC<ICardProps> = ({ image, name, exp, ids, tipos }) => {
  return (
    <>
      <Box
        w="200px"
        h="300px"
        mt="20px"
        border="1px"
        borderColor="secondary.900"
        borderRadius="8"
        bgGradient="linear(to-t, yellow.500, blue.500)"
      >
        <Box
          h="20px"
          m="1"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box />
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
        <Box w="100%" h="150px" p="4">
          <Image src={image} w="100%" h="100%" />
        </Box>

        <Box
          h="30px"
          fontWeight="semibold"
          as="h2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1"
        >
          <Box display="block">
            <Text as="b" fontSize="14px">
              {name}
            </Text>
            <Text fontSize="9px">{tipos}</Text>
          </Box>
        </Box>

        <Box w="100px" p="2">
          <Box display="flex" gap="5">
            <Box
              display="block"
              justifyContent="space-evenly"
              alignItems="center"
              gap="2"
            >
              <Box>
                <Text fontSize="10px">ID:</Text>
                <Text fontSize="14px">{ids}</Text>
              </Box>
              <Box>
                <Text fontSize="10px">EXP:</Text>
                <Text fontSize="14px">{exp}</Text>
              </Box>
            </Box>
            <Box
              display="block"
              justifyContent="space-evenly"
              alignItems="center"
              gap="2"
            >
              <Box>
                <Text fontSize="10px">Força:</Text>
                <Text fontSize="14px">10</Text>
              </Box>
              <Box>
                <Text fontSize="10px">Agilidade:</Text>
                <Text fontSize="14px">40</Text>
              </Box>
            </Box>
            <Box
              display="block"
              justifyContent="space-evenly"
              alignItems="center"
              gap="2"
            >
              <Box>
                <Text fontSize="10px">Ataque:</Text>
                <Text fontSize="14px">50</Text>
              </Box>
              <Box>
                <Text fontSize="10px">Defesa:</Text>
                <Text fontSize="14px">50</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
