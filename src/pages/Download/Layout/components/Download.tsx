import {
  VStack,
  Box,
  Text,
  Heading,
  useMultiStyleConfig,
  Image,
} from "@chakra-ui/react";

import { useFileUpload, BackgroundType } from "../../../../hooks/useFileUpload";

function getSelectedBackground(backgrounds: BackgroundType[]): BackgroundType {
  const [selected] = backgrounds.filter((b) => b.selected);
  return selected;
}

export default function Download() {
  const styles = useMultiStyleConfig("Download", {});
  const [state] = useFileUpload();

  const { href } = getSelectedBackground(state?.backgrounds);

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
      <Box sx={styles.picture_box}>
        {href && (
          <Image
            src={href}
            alt="file"
            boxSize="35rem"
            objectFit="cover"
            sx={styles.picture_box}
          />
        )}
      </Box>
    </VStack>
  );
}
