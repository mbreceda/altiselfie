import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundation style overrides
// Foundation available https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
import colors from "./foundations/colors";

const overrides = {
  colors,
  styles,
  components: {},
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
};

export default extendTheme(overrides);
