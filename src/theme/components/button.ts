import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const Button: ComponentMultiStyleConfig = {
  parts: ["pill"],
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
  },
};

export default Button;
