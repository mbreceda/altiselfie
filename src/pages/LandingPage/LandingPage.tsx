import { VStack, Container, Box, useMultiStyleConfig } from "@chakra-ui/react";

export default function AltiselfiLandigPage() {
  const styles = useMultiStyleConfig("MainContainer", {});

  return (
    <Container sx={styles.main_container}>
      <VStack justifyContent="center" h="100%">
        <Box>Hello</Box>
      </VStack>
    </Container>
  );
}
