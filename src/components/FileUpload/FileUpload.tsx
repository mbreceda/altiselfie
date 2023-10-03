import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, useMultiStyleConfig } from "@chakra-ui/react";
import { Icon } from "../Icon";
import FileUploadProps from "./types";

import { useFileUpload, BackgroundActions } from "../../hooks/useFileUpload";

export default function FileUpload({ name, isRequired }: FileUploadProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonStyles = useMultiStyleConfig("Button", {});

  const [_, dispatch] = useFileUpload();

  return (
    <FormControl isRequired={isRequired}>
      <input
        type="file"
        ref={inputRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event && event?.target.files) {
            const profilePicture = URL.createObjectURL(event.target.files[0]);
            dispatch({
              type: BackgroundActions.UPLOAD_PROFILE_PICTURE,
              option: { profilePicture },
            });
            navigate("/upload");
          }
        }}
        name={name || "input_file"}
        hidden
      />
      <Button
        sx={buttonStyles.pill}
        leftIcon={<Icon name="attach_file_add" />}
        onClick={() => inputRef?.current?.click()}
      >
        Upload file
      </Button>
    </FormControl>
  );
}
