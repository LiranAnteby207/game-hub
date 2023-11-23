import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchIpnup from "./SearchIpnup";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchIpnup />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
