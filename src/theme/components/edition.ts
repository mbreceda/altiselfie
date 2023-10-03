import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const Edition: ComponentMultiStyleConfig = {
  parts: [
    "previewer_box",
    "options_box",
    "picture_box",
    "tooltip_box",
    "tooltip_box_heading",
    "tooltip_box_description",
    "options_box_heading",
  ],
  baseStyle: {
    previewer_box: {
      width: "100%",
    },
    picture_box: {
      width: "35rem",
      height: "35rem",
      background: "altiorange.800",
      borderRadius: "1rem",
      boxShadow: "xl",
    },
    tooltip_box: {
      width: "35rem",
      // minHeight: "9.39rem",
      background: "altiorange.800",
      borderRadius: "1rem",
      color: "altiorange.600",
      pt: "0.5rem",
      pb: "1rem",
      px: "0.75rem",
      mt: 5,
      boxShadow: "xl",
      position: "relative",
    },
    tooltip_box_heading: {
      fontSize: "headings.5",
      lineHeight: 2,
      fontWeight: 500,
    },
    tooltip_box_description: {
      fontSize: "paragraph.large",
      letterSpacing: 0,
      lineHeight: 1.2,
    },
    options_box: {
      width: "100%",
      height: "100%",
    },
    options_box_heading: {
      fontSize: "headings.1",
      fontWeight: 500,
    },
  },
};

export default Edition;
