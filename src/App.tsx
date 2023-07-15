import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import BannerCard from "./components/BannerCard";

function App() {
  return (
    <Box m={2}>
      <TopBar />
      <Grid container mt={2}>
        <Grid item xs={4}>
          <BannerCard>
            Welcome to my personal portfolio webpage. Here you will find a
            variety of projects I have worked on that range from pure
            programming, to server setup and much more.
          </BannerCard>
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
