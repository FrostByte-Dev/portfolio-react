import { Grid } from "@mui/material";
import BannerCard from "../../components/BannerCard";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BannerCard>
          Welcome to my personal portfolio webpage. Here you will find a variety
          of projects I have worked on that range from pure programming, to
          server setup and much more.
        </BannerCard>
      </Grid>
    </Grid>
  );
}

export default Home;
