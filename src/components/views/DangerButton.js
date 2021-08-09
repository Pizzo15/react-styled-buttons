import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const DangerButton = ({ title, variant, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant={variant} onClick={onClick}>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default DangerButton;
