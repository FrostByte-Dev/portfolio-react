import { Grid } from "@mui/material";
import BannerCard from "../../components/BannerCard";

function Projects() {
  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <BannerCard>This is the Projects Page</BannerCard>
      </Grid>
    </Grid>
  );
}

export default Projects;
