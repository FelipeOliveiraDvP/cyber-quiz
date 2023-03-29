import { ReactNode } from "react";
import { Container, Flex } from "@mantine/core";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <Container
      p={0}
      fluid
      sx={{
        height: "100vh",
        backgroundImage: `url('/background.png')`,
        backgroundRepeat: "repeat-x",
        backgroundColor: "#000103",
      }}
    >
      <Flex direction="column" justify="flex-end" h="100%" p="md">
        {children}
      </Flex>
    </Container>
  );
}
