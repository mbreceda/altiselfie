import { useRef } from "react";
import { Button, FormControl, useMultiStyleConfig } from "@chakra-ui/react";
import { Icon } from "../Icon";
import FileUploadProps from "./types";

import { useFileUpload } from "../../hooks";

export default function FileUpload({ name, isRequired }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { file, handleChange } = useFileUpload();
  const buttonStyles = useMultiStyleConfig("Button", {});
  console.log(file);
  return (
    <FormControl isRequired={isRequired}>
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
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
