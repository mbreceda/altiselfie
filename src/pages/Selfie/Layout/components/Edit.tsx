import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Button,
  Image,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import {
  useFileUpload,
  BackgroundActions,
  BackgroundType,
} from "../../../../hooks/useFileUpload";

function getSelectedBackground(backgrounds: BackgroundType[]): BackgroundType {
  const [selected] = backgrounds.filter((b) => b.selected);
  return selected;
}

export default function Edit() {
  const styles = useMultiStyleConfig("Edition", {});
  const buttonStyles = useMultiStyleConfig("Button", {});
  const [state, dispatch] = useFileUpload();

  const { value, description, href } = getSelectedBackground(
    state?.backgrounds
  );

  return (
    <VStack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="space-evenly"
    >
      <HStack px="10" mt="5">
        <Box id="preview_box" sx={styles.previewer_box}>
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
          <Box sx={styles.tooltip_box}>
            <div id="tooltip"></div>
            {href && <Text sx={styles.tooltip_box_heading}>Style meaning</Text>}
            <Text key={`button-${value}`} sx={styles.tooltip_box_description}>
              {description}
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
              {state.backgrounds.map(
                ({
                  value,
                  label,
                  description,
                  href,
                  selected,
                  profilePicture,
                }) => (
                  <Button
                    key={`description-${value}`}
                    name={value}
                    sx={
                      selected ? buttonStyles.pill_selected : buttonStyles.pill
                    }
                    onClick={() =>
                      dispatch({
                        type: BackgroundActions.UPDATE_BACKGROUND,
                        option: {
                          value,
                          label,
                          description,
                          href,
                          selected: true,
                          profilePicture,
                        },
                      })
                    }
                  >
                    {label}
                  </Button>
                )
              )}
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
}
