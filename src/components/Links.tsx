import * as React from "react";
import { Center, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const linkData = [
  { href: "https://www.linkedin.com/in/clintondavid46/", text: "Linkedin" },
  { href: "https://twitter.com/daveclintonn", text: "Twitter" },
  { href: "https://github.com/daveclinton", text: "Github" },
];

const Links: React.FC = () => {
  return (
    <Center display="flex" flexDir="column">
      <Text mb="1rem" textStyle="h2">
        Links
      </Text>
      <Stack direction="row" spacing="24px">
        {linkData.map(({ href, text }, data) => (
          <Link key={data} href={href} isExternal>
            <ExternalLinkIcon mx="2px" /> {text}
          </Link>
        ))}
      </Stack>
    </Center>
  );
};

export default Links;
