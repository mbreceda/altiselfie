import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundation style overrides
// Foundation available https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
import colors from "./foundations/colors";
import fontSizes from "./foundations/text-styles";

// Single Part Component style overrides
import MainContainer from "./components/main-container";
import Button from "./components/button";
import Edition from "./components/edition";
import Download from "./components/download";

const overrides = {
  fontSizes,
  colors,
  styles,
  components: {
    Button,
    MainContainer,
    Edition,
    Download,
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
};

export default extendTheme(overrides);
