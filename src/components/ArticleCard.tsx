import * as React from "react";
import { Center, LinkBox, Text, Image } from "@chakra-ui/react";

const ArticleCard: React.FC = () => {
  return (
    <Center display="flex" gap="10px" flexWrap="wrap" m="20px">
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Image
          src="https://itsfoss.com/content/images/size/w600/format/webp/2023/07/birthday-wish-linux-terminal.png"
          alt="Dan Abramov"
        />
        <Text mt="15px" fontSize="1.4rem">
          Display Animated ASCII Birthday Wish in Linux Terminal 🎂
        </Text>
        <Text opacity="0.8" fontSize="1rem">
          Make the special occasion for your loved ones even more special by
          creating an ASCII birthday animation in the Linux terminal.
        </Text>
      </LinkBox>
    </Center>
  );
};

export default ArticleCard;
