import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Button,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export default function Edit() {
  const styles = useMultiStyleConfig("Edition", {});
  const buttonStyles = useMultiStyleConfig("Button", {});

  return (
    <VStack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="space-evenly"
    >
      <HStack px="10" mt="5">
        <Box id="preview_box" sx={styles.previewer_box}>
          <Box sx={styles.picture_box}></Box>
          <Box sx={styles.tooltip_box}>
            <div id="tooltip"></div>
            <Text sx={styles.tooltip_box_heading}>Style meaning</Text>
            <Text sx={styles.tooltip_box_description}>
              Here we’ll tell people a fun fact regarding the style they chose.
            </Text>
          </Box>
        </Box>
        <Box sx={styles.options_box}>
          <VStack height="100%">
            <Box my={8}>
              <Heading sx={styles.options_box_heading}>
                Personalize your image!
              </Heading>
            </Box>
            <HStack flexWrap="wrap" justifyContent="center" spacing={3} my={10}>
              <Button sx={buttonStyles.pill}>True Altimetrian</Button>
              <Button sx={buttonStyles.pill}>¡Viva Mexico!</Button>
              <Button sx={buttonStyles.pill}>¡Viva Colombia!</Button>
              <Button sx={buttonStyles.pill}>Spooky season</Button>
              <Button sx={buttonStyles.pill}>Sugar Skull</Button>
              <Button sx={buttonStyles.pill}>Christmas fever</Button>
              <Button sx={buttonStyles.pill}>The big countdown</Button>
              <Button sx={buttonStyles.pill}>Royal gift</Button>
              <Button sx={buttonStyles.pill}>L.O.V.E</Button>
              <Button sx={buttonStyles.pill}>Flower mania</Button>
              <Button sx={buttonStyles.pill}>No background</Button>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
}
