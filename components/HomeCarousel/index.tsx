import { Carousel } from "@mantine/carousel";
import { rem, Title, Text } from "@mantine/core";

export function HomeCarousel() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      withControls={false}
      height={200}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: "width 250ms ease",

          "&[data-active]": {
            width: rem(40),
            backgroundColor: "#00A0D9",
          },
        },
      }}
    >
      <Carousel.Slide>
        <Title order={2} align="center">
          Lorem Ipsum has been{" "}
        </Title>
        <Text align="center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,{" "}
        </Text>
      </Carousel.Slide>

      <Carousel.Slide>
        <Title order={2} align="center">
          Lorem Ipsum has been{" "}
        </Title>
        <Text align="center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,{" "}
        </Text>
      </Carousel.Slide>

      <Carousel.Slide>
        <Title order={2} align="center">
          Lorem Ipsum has been{" "}
        </Title>
        <Text align="center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,{" "}
        </Text>
      </Carousel.Slide>

      <Carousel.Slide>
        <Title order={2} align="center">
          Lorem Ipsum has been{" "}
        </Title>
        <Text align="center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,{" "}
        </Text>
      </Carousel.Slide>
    </Carousel>
  );
}
