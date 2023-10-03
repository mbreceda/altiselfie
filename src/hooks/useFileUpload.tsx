import { createContext, useContext, useReducer, Dispatch } from "react";

export enum BackgroundActions {
  UPDATE_BACKGROUND = "UPDATE_BACKGROUND",
}

type BackgroundType = {
  value: string;
  label: string;
  description: string;
  href: string;
  selected: boolean;
};

type State = {
  backgrounds: BackgroundType[];
};

type SetBackground = {
  type: typeof BackgroundActions.UPDATE_BACKGROUND;
  option: BackgroundType;
};

type BackgroundActionTypes = SetBackground;

const initialState: State = {
  backgrounds: [
    {
      value: "true_altimetrian",
      label: "True Altimetran",
      href: "/src/assets/images/true_altimetrian.png",
      description:
        "The profile pic of someone fully immersed in the Altiverse. Portraying honor and trust, it’s said that having it as a profile pic can boost project performance and overall professional results.",
      selected: true,
    },
    {
      value: "viva_mexico",
      label: "¡Viva Mexico!",
      href: "/src/assets/images/viva_mexico.png",
      description:
        "The profile pic of someone fully immersed in the Altiverse. Portraying honor and trust, it’s said that having it as a profile pic can boost project performance and overall professional results.",
      selected: false,
    },
  ],
};

const reducer = (state: State, action: BackgroundActionTypes): State => {
  switch (action.type) {
    case BackgroundActions.UPDATE_BACKGROUND:
      return {
        ...state,
        backgrounds: [...state.backgrounds],
      };
    default:
      return state;
  }
};

const BackgroundReducer = () => useReducer(reducer, initialState);
interface iFileUpload {
  children: React.ReactNode;
}

const FileUploadContext = createContext<
  [State, Dispatch<BackgroundActionTypes>]
>([{ backgrounds: [] }, () => {}]);

const FileUploadProvider = ({ children }: iFileUpload) => {
  const [state, dispatch] = BackgroundReducer();
  return (
    <FileUploadContext.Provider value={[state, dispatch]}>
      {children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadProvider;
export const useFileUpload = () => useContext(FileUploadContext);
