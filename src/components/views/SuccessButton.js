import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const SuccessButton = ({ title, variant, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant={variant} onClick={onClick}>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default SuccessButton;
