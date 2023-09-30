import {
  createContext,
  useContext,
  ChangeEvent,
  useState,
  useEffect,
} from "react";

function useUploader() {
  let url = "";
  const [file, setFile] = useState(url);

  useEffect(() => {
    setFile(url);
  }, [url]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event && event?.target.files) {
      url = URL.createObjectURL(event.target.files[0]);
      setFile(url);
    }
  }

  return {
    file,
    handleChange,
  };
}

interface iFileUpload {
  children: React.ReactNode;
}

const FileUploadContext = createContext<{
  file: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}>({
  file: "",
  handleChange: () => {},
});

const FileUploadProvider = ({ children }: iFileUpload) => {
  const { file, handleChange } = useUploader();
  return (
    <FileUploadContext.Provider value={{ file, handleChange }}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadProvider;
export const useFileUpload = () => useContext(FileUploadContext);
