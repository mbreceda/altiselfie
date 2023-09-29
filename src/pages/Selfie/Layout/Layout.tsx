import { VStack } from "@chakra-ui/react";
import { Navigation } from "./components";

export default function Layout() {
  return (
    <VStack width="container.xl" height="100%">
      <Navigation></Navigation>
    </VStack>
  );
}
