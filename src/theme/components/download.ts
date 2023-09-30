import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const Download: ComponentMultiStyleConfig = {
  parts: [
    "download_box",
    "download_box_heading",
    "download_box_text",
    "previewer_box",
    "options_box",
    "picture_box",
    "tooltip_box",
    "tooltip_box_heading",
    "tooltip_box_description",
    "options_box_heading",
  ],
  baseStyle: {
    download_box: {
      width: "35rem",
      textAlign: "center",
    },
    download_box_heading: {
      fontSize: "headings.1",
      fontWeight: 500,
      my: 3,
    },
    download_box_text: {
      fontSize: "headings.5",
      lineHeight: 1.2,
      letterSpacing: 0,
      my: 5,
    },
    picture_box: {
      width: "35rem",
      height: "35rem",
      background: "altiorange.800",
      borderRadius: "1rem",
      boxShadow: "xl",
    },
  },
};

export default Download;
