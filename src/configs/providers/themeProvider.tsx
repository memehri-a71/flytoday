import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1773dc",
    },
    secondary: {
      main: '#ff7913'
    },
    info:{
      main:'#c1c3c7'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: 'iranSans',
  },
});
export default function CustomThemeProvider({ children }: any): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  );
}

