import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

function App() {
  return (
    <Box m={2}>
      <Grid container>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
      </Grid>

      <Outlet />
    </Box>
  );
}

export default App;
