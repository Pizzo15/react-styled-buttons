import {
  ThemeProvider,
  Container,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import { theme } from "./theme";

import SuccessButton from "./components/views/SuccessButton";
import WarningButton from "./components/views/WarningButton";
import DangerButton from "./components/views/DangerButton";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className={classes.container}>
        <Box flexDirection="row" justifyContent="space-between" display="flex">
          <Button
            color="primary"
            variant="contained"
            onClick={() => console.log("Primary clicked!")}
          >
            Primary
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => console.log("Secondary clicked!")}
          >
            Secondary
          </Button>
          <SuccessButton
            title="Success"
            variant="contained"
            onClick={() => console.log("Success clicked!")}
          />
          <WarningButton
            title="Warning"
            variant="contained"
            onClick={() => console.log("Warning clicked!")}
          />
          <DangerButton
            title="Danger"
            variant="contained"
            onClick={() => console.log("Danger clicked!")}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
