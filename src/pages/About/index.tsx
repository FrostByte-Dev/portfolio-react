import { Grid } from "@mui/material";
import BannerCard from "../../components/BannerCard";

function About() {
  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <BannerCard>This is the About Page</BannerCard>
      </Grid>
    </Grid>
  );
}

export default About;
