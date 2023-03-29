import Image from "next/image";
import { Button, Portal, Stack } from "@mantine/core";

import { HomeCarousel } from "@/components/HomeCarousel";
import { useDisclosure } from "@mantine/hooks";
import { QuizModal } from "@/components/Quiz/Modal";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack spacing={64} align="center">
        <Image width={227} height={45} src="/logo.png" alt="Instituto SENAI" />
        <HomeCarousel />
        <Button fullWidth size="lg" onClick={() => open()}>
          Vamos Começar
        </Button>
      </Stack>

      <Portal>
        <QuizModal opened={opened} onClose={close} />
      </Portal>
    </>
  );
}
