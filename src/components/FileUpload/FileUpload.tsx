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

  async function sendImage(imageProfile: File): Promise<Blob> {
    const url = "https://beta-sdk.photoroom.com/v1/render";
    const form = new FormData();
    form.append("templateId", "99a09936-9537-461b-99b2-2413fbbe4129");
    form.append("imageFile", imageProfile);

    const options = {
      method: "POST",
      headers: {
        Accept: "image/png, application/json",
        "x-api-key": "105661f5a1e079105ab94b98f25a9e6281795e0b",
      },
      body: form,
    };

    options.body = form;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.error(response.json());
        throw new Error("Network response was not ok");
      }

      const imageBlob: Blob = await response.blob();
      console.log(imageBlob);

      return imageBlob;
    } catch (error) {
      console.error(error);
      return new Blob();
    }
  }

  return (
    <FormControl isRequired={isRequired}>
      <input
        type="file"
        ref={inputRef}
        onChange={async (event: ChangeEvent<HTMLInputElement>) => {
          if (event && event?.target.files) {
            const imageFile = event.target.files[0];
            console.log("FileUpload.imageFile", imageFile);
            const imageLoaded = sendImage(event.target.files[0]);
            const img = URL.createObjectURL(await imageLoaded);
            const profilePicture = img;

            dispatch({
              type: BackgroundActions.UPLOAD_PROFILE_PICTURE,
              option: { profilePicture, imageFile },
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
