import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const getFirstWord = (slug: string) => {
  const words = slug.split(/[-_0-9]/); // Split based on hyphen, underscore, or number
  return words[0].toLowerCase();
};
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  const uniquePlatforms = new Set();
  const uniqueIcons = new Set();

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const slug = platform.slug;
        const iconName = getFirstWord(slug);

        // Check if the icon name and platform slug are not in their respective sets
        if (!uniqueIcons.has(iconName) && !uniquePlatforms.has(slug)) {
          uniqueIcons.add(iconName);
          uniquePlatforms.add(slug);

          return (
            <Icon
              key={platform.id}
              as={iconMap[iconName]}
              title={slug}
              color="gray.500"
            />
          );
        }
      })}
    </HStack>
  );
};

export default PlatformIconList;
