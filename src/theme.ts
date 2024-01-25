import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#503E9D", // Main color
      light: "#503E9D1A",
    },
    secondary: {
      main: "#FB6D3A", // Secondary color
      light: "#FB6D3A1A",
    },
    warning: {
      main: "#FACD5D", //yellow
      light: "#FACD5D1A",
    },
    common: {
      white: "#f2f6fb",
      black: "#00000099",
    },
    info: {
      main: "#503E9D1A",
    },
    action: {
      disabledBackground: "#d3d3d3",
      disabled: "#d3d3d3",
    },
    // background: {
    //   paper: "#A3A3A4", //menu and card bg
    // },
    grey: {
      50: "#F7F7F7",
      100: "#E5EAF2",
      200: "#DAE2ED",
      300: "#C7D0DD",
      400: "#B0B8C4",
      500: "#9DA8B7",
      600: "#6B7A90",
      700: "#434D5B",
      800: "#303740",
      900: "#1C2025",
    },
  },
  typography: {
    body2: {
      color: "#00000099",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
