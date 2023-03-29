import Image from "next/image";
import { Button, Stack } from "@mantine/core";

import { HomeCarousel } from "@/components/HomeCarousel";

export default function Home() {
  return (
    <Stack spacing={64} align="center">
      <Image width={227} height={45} src="/logo.png" alt="Instituto SENAI" />
      <HomeCarousel />
      <Button fullWidth>Vamos Começar</Button>
    </Stack>
  );
}
