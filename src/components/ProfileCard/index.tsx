import { Grid, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileCard = () => (
  <Grid
    container
    sx={{
      padding: 2,
      border: 2,
      borderTop: 40,
      borderRadius: 2,
      borderColor: "primary.main",
      bgcolor: "#fff",
      color: "primary.main",
    }}
  >
    <Grid item lg={8}>
      <Typography variant="h4" fontWeight={"bold"} gutterBottom>
        Jacques Levasseur
      </Typography>
      <Typography variant="h6" fontWeight={"bold"} gutterBottom>
        Senior Full Stack Developer
      </Typography>
      <Typography variant="body1" maxWidth={"25rem"}>
        Passionate about delivering innovative products, I excel in
        problem-solving and collaboration to enhance user experiences and drive
        business growth.
      </Typography>
      <Stack direction={"row"} spacing={2} mt={2}>
        <Link
          href="https://github.com/FrostByte-Dev"
          target="_blank"
          color={"primary.main"}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jacqueslevasseur/"
          target="_blank"
          color={"primary.main"}
        >
          <LinkedInIcon />
        </Link>
      </Stack>
    </Grid>
    <Grid item lg={4}></Grid>
  </Grid>
);

export default ProfileCard;
