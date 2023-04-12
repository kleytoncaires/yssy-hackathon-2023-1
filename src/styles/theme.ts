import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#4720CC",
      light: "#2B276E",
      dark: "#6538E5",
      50: "#F2E7FE",
      100: "#DBB2FF",
      200: "#BB86FC",
      300: "#7F39FB",
      400: "#7F39FB",
      500: "#6200EE",
      600: "#5600E8",
      700: "#3700B3",
      800: "#30009C",
      900: "#2A08B0",
    },
    secondary: {
      main: "#B8E81C",
      light: "#C5F82E",
      dark: "#99E014",
      50: "#69FFFF",
      100: "#4BF3F0",
      200: "#23DCD9",
      300: "#00C6C3",
      400: "#00AFAD",
      500: "#009A98",
      600: "#008483",
      700: "#006F6F",
      800: "#99E014",
      900: "#C5F82E",
    },
    error: {
      main: "#D32F2F",
      light: "#EF5350",
      dark: "#C62828",
    },
    warning: {
      main: "#ED6C02",
      light: "#FF9800",
      dark: "#E65100",
    },
    success: {
      main: "#2E7D32",
      light: "#4CAF50",
      dark: "#1B5E20",
    },
    background: {
      paper: "#F9F9F9",
      default: "#FFFFFF",
    },
    grey: {
      400: "#F4F5F5",
      500: "#E2E6E9",
      600: "#A7AEB3",
      700: "#78868C",
      800: "#4F5E66",
      900: "#233540",
    },
  },
  typography: {
    fontFamily: [
      "'DM Sans', sans-serif;",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
