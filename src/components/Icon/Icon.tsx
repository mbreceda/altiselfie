import { useMemo } from "react";
import SVG from "react-inlinesvg";
import { IconProps } from "./types";

function getIconUrl(name: string): string {
  return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href;
}

export default function Icon({ name, width, height, color }: IconProps) {
  const finalUrl = useMemo(() => {
    return getIconUrl(name);
  }, [name]);

  return (
    <SVG
      src={finalUrl}
      width={width || 24}
      height={height || 24}
      color={color}
      fill={color}
    />
  );
}
