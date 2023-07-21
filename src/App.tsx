import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";

const App = () => (
  <Container maxWidth="xl">
    <Grid container mt={2}>
      <Grid item xs={12}>
        <TopBar />
      </Grid>
    </Grid>

    <Outlet />
  </Container>
);

export default App;
