import { Text } from "@mantine/core";
import ShieldIcon from "remixicon-react/ShieldKeyholeLineIcon";

export function QuizQuestionArea() {
  return (
    <Text
      color="blue.4"
      mb={10}
      style={{ display: "flex", alignItems: "center" }}
    >
      <ShieldIcon size={24} style={{ marginRight: 10 }} />
      Área da pergunta
    </Text>
  );
}
