import {
  VStack,
  Container,
  Box,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
// import { Icon } from "../../components/Icon";

export default function AltiselfiLandigPage() {
  const styles = useMultiStyleConfig("MainContainer", {});

  return (
    <Container sx={styles.main_container}>
      <VStack justifyContent="center" h="100%">
        <Box>
          <Text sx={styles.display_text}>Welcome to the</Text>
          <Text sx={styles.display_text}>Profile Pic Style, Altimetrian!</Text>
          <Text sx={styles.kickoff_text}>
            Please, select image you'd like AI to spice up.
          </Text>
          {/* <Icon name="attach_file_add" color="black" /> */}
        </Box>
      </VStack>
    </Container>
  );
}
