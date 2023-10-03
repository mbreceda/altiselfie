import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import { HStack, Button, useMultiStyleConfig } from "@chakra-ui/react";
import { Icon } from "../../../../components/Icon";

import { useFileUpload, BackgroundType } from "../../../../hooks/useFileUpload";

function getSelectedBackground(backgrounds: BackgroundType[]): BackgroundType {
  const [selected] = backgrounds.filter((b) => b.selected);
  return selected;
}

export default function Actions() {
  const navigate = useNavigate();
  const buttonStyles = useMultiStyleConfig("Button", {});

  const [state] = useFileUpload();
  const { href } = getSelectedBackground(state?.backgrounds);

  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      height="3rem"
      margin="1rem"
    >
      <Button
        sx={buttonStyles.pill}
        leftIcon={<Icon name="arrow_back" />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Button
        sx={buttonStyles.pill}
        rightIcon={<Icon name="download" />}
        onClick={() => {
          if (href) {
            saveAs(href.toString(), "selfimetrik.jpg");
          }
        }}
      >
        Download
      </Button>
    </HStack>
  );
}
