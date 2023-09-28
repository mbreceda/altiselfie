import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const MainContainer: ComponentMultiStyleConfig = {
  parts: ["main_container", "display_text", "kickoff_text"],
  baseStyle: {
    main_container: {
      height: "calc(100vh)",
      maxW: "1024px",
    },
    display_text: {
      fontSize: "display.large",
      fontWeight: 500,
      textAlign: "center",
    },
    kickoff_text: {
      fontSize: "headings.4",
      fontWeight: 500,
      textAlign: "center",
    },
  },
};

export default MainContainer;
