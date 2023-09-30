import { HStack, Button, useMultiStyleConfig } from "@chakra-ui/react";
import { Icon } from "../../../../components/Icon";

export default function Navigation() {
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
      <HStack>
        <Icon name="isotype" width={40} height={40} />
        <Icon name="separator" width={40} height={40} />
        <Icon name="selfimetrik" width={130} height={130} />
      </HStack>
      <Button sx={buttonStyles.pill} rightIcon={<Icon name="check" />}>
        Done
      </Button>
    </HStack>
  );
}
