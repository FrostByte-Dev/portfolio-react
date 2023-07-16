import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import BannerCard from "./components/BannerCard";

function App() {
  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12} >
          <Box padding={2} border={2} borderRadius={2} borderColor={'primary.main'} bgcolor={'primary.main'} color={'#fff'}>
            <Typography variant="h4" fontWeight={"bold"} gutterBottom>
              Jacques Levasseur
            </Typography>
            <Typography variant="h6" fontWeight={"bold"} gutterBottom>
              Senior Full Stack Developer
            </Typography>
            <Typography variant="body1" maxWidth={'25rem'}>
              Passionate about delivering innovative products, I excel in
              problem-solving and collaboration to enhance user experiences and
              drive business growth.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={7}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
