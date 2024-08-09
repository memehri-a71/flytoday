import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1773dc",
    },
    secondary: {
      main: '#ff7913'
    }
  },
});
export default function CustomThemeProvider({ children }: any): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  );
}
