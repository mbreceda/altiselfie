import { VStack } from "@chakra-ui/react";
import { Navigation, Edit } from "./components";

export default function Layout() {
  return (
    <VStack width="container.xl" alignItems="center" justifyContent="center">
      <Navigation></Navigation>
      <Edit></Edit>
    </VStack>
  );
}
