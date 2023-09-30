import { VStack } from "@chakra-ui/react";
import { Download, Actions } from "./components";

export default function Layout() {
  return (
    <VStack width="35rem">
      <Download></Download>
      <Actions></Actions>
    </VStack>
  );
}
