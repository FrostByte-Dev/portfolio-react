import { Box, Grid } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";

function Home() {
  return (
    <Grid container mt={0} spacing={2} alignItems={"stretch"}>
      <Grid item lg={5} md={12} sm={12} xs={12}>
        <ProfileCard />
      </Grid>
      <Grid item lg={7}>
        <Box
          padding={2}
          border={2}
          borderRadius={2}
          borderColor={"primary.main"}
          bgcolor={"primary.main"}
          color={"#fff"}
          height={"100%"}
        >
          Welcome to my personal portfolio webpage. Here you will find a variety
          of projects I have worked on that range from pure programming, to
          server setup and much more.
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
