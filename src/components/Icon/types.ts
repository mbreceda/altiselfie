export type AllowedIcons = "attach_file_add" | "altimetrik_logo";

export interface IconProps {
  name: AllowedIcons;
  width?: number | string;
  height?: number | string;
  color?: string;
}
