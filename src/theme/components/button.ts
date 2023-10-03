import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const Button: ComponentMultiStyleConfig = {
  parts: ["pill", "pill_selected"],
  baseStyle: {
    pill: {
      bg: "transparent",
      border: "1px",
      borderColor: "altiorange.800",
      borderRadius: "2rem",
      borderWidth: "2px",
      padding: "0.5rem 0.9rem",
      fontWeight: 400,
      fontSize: "paragraph.large",
    },
    pill_selected: {
      bg: "altiorange.800",
      border: "1px",
      borderColor: "altiorange.800",
      borderRadius: "2rem",
      borderWidth: "2px",
      padding: "0.5rem 0.9rem",
      fontWeight: 400,
      fontSize: "paragraph.large",
      color: "altiorange.500",
    },
  },
};

export default Button;
