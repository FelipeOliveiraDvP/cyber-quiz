import {
  Modal,
  Progress,
  createStyles,
  Text,
  Flex,
  Button,
  Stack,
} from "@mantine/core";
import { QuizQuestionArea } from "../Question/Area";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export function QuizModal({ opened, onClose }: Props) {
  const { classes } = useStyles();
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      fullScreen
      transitionProps={{ transition: "fade", duration: 200 }}
      title={<Progress value={75} size="lg" />}
      styles={{
        header: {
          flexDirection: "row-reverse",
        },
        title: {
          width: "100%",
        },
        body: {
          height: "100%",
        },
      }}
      closeButtonProps={{
        size: "xl",
        iconSize: 32,
      }}
    >
      <Flex direction="column" justify="space-between" h="calc(100% - 76px)">
        <div>
          <QuizQuestionArea />
          <Text color="white" size={20} weight={700}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </Text>
        </div>

        <Stack>
          <Button fullWidth size="lg" variant="outline" color="gray.6">
            Sim
          </Button>
          <Button fullWidth size="lg" variant="outline" color="gray.6">
            Não
          </Button>
          <Button fullWidth size="lg" variant="outline" color="gray.6">
            Parcialmente
          </Button>
          <Button fullWidth size="lg" variant="outline" color="gray.6">
            Não sei responder
          </Button>
        </Stack>

        <Button fullWidth size="lg">
          Continuar
        </Button>
      </Flex>
    </Modal>
  );
}

const useStyles = createStyles((theme) => ({
  customProgress: {
    height: 32,
    backgroundColor: theme.colors.blue[7],
    width: "50%",
  },
}));
