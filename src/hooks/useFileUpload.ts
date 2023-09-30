import { ChangeEvent, useState } from "react";

export default function useFileUpload() {
  const [file, setFile] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event || !event.target.files) return;
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  return {
    file,
    handleChange,
  };
}
