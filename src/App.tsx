import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <Box m={2}>
      <Grid container spacing={2} alignItems={"stretch"}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <ProfileCard />
        </Grid>
        <Grid item lg={7}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
