import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Button,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export default function Download() {
  const styles = useMultiStyleConfig("Download", {});

  return (
    <VStack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={styles.download_box}>
        <Heading sx={styles.download_box_heading}>Enjoy your new pic!</Heading>
        <Text sx={styles.download_box_text}>
          Time to dust out that same old Teams image with some Altimetriak
          swagger 😎
        </Text>
      </Box>
      <Box sx={styles.picture_box}></Box>
    </VStack>
  );
}
