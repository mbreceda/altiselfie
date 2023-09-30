export type AllowedIcons =
  | "attach_file_add"
  | "altimetrik_logo"
  | "logotype"
  | "isotype"
  | "arrow_back"
  | "check"
  | "selfimetrik"
  | "separator"
  | "triangle";

export interface IconProps {
  name: AllowedIcons;
  width?: number | string;
  height?: number | string;
  color?: string;
}
