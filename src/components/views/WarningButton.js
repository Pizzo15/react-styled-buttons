import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
  },
});

const WarningButton = ({ title, variant, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant={variant} onClick={onClick}>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default WarningButton;
