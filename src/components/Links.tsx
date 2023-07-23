import * as React from "react";
import { Flex, Link, chakra, shouldForwardProp } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";

const linkData = [
  {
    href: "https://www.linkedin.com/in/clintondavid46/",
    icon: BsLinkedin,
    color: "",
  },
  { href: "https://twitter.com/daveclintonn", icon: FaTwitter, color: "" },
  { href: "https://github.com/daveclinton", icon: BsGithub, color: "" },
];

const Links: React.FC = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <ChakraBox
      animate={{
        scaleY: [1, 1.2, 1],
        scaleX: [1, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Flex
        margin={{ base: "auto", lg: "unset" }}
        align="center"
        borderRadius="10px"
        display="flex"
        flexDir="row"
        justify="space-evenly"
      >
        {linkData.map(({ href, icon, color }, data) => (
          <Link key={data} href={href} isExternal>
            <Icon as={icon} color={color} boxSize="30px" />
          </Link>
        ))}
      </Flex>
    </ChakraBox>
  );
};

export default Links;
