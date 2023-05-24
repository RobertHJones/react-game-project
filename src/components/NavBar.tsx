import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/vector-sun-generic-logo-and-symbols.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
