import { HStack, Box, Button, useMultiStyleConfig } from "@chakra-ui/react";
import { Icon } from "../../../../components/Icon";

export default function Actions() {
  const buttonStyles = useMultiStyleConfig("Button", {});

  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      height="3rem"
      margin="1rem"
    >
      <Button sx={buttonStyles.pill} leftIcon={<Icon name="arrow_back" />}>
        Back
      </Button>
      <Button sx={buttonStyles.pill} rightIcon={<Icon name="download" />}>
        Download
      </Button>
    </HStack>
  );
}
