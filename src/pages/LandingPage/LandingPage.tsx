import {
  VStack,
  HStack,
  Container,
  Box,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { Icon } from "../../components/Icon";
import { FileUpload } from "../../components/FileUpload";

export default function AltiselfiLandigPage() {
  const styles = useMultiStyleConfig("MainContainer", {});

  return (
    <div id="showcase">
      <Container sx={styles.main_container}>
        <VStack justifyContent="center" h="100%">
          <HStack>
            <Icon name="isotype" />
            <Icon name="logotype" width={148} height={148} />
          </HStack>
          <Box mb="1">
            <Text sx={styles.display_text}>
              Welcome to the Selfiemetrik, Altimetrian!
            </Text>
            <Text sx={styles.kickoff_text}>
              Please, select the image you’d like AI to spice up.
            </Text>
          </Box>

          <Box>
            <FileUpload name="fileUploader" isRequired={true} />
          </Box>
        </VStack>
      </Container>
    </div>
  );
}
