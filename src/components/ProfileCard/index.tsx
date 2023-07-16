import { Box, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function ProfileCard() {
    return (
        <Box
            padding={2}
            border={2}
            borderRadius={2}
            borderColor={"primary.main"}
            bgcolor={"primary.main"}
            color={"#fff"}
          >
            <Typography variant="h4" fontWeight={"bold"} gutterBottom>
              Jacques Levasseur
            </Typography>
            <Typography variant="h6" fontWeight={"bold"} gutterBottom>
              Senior Full Stack Developer
            </Typography>
            <Typography variant="body1" maxWidth={"25rem"}>
              Passionate about delivering innovative products, I excel in
              problem-solving and collaboration to enhance user experiences and
              drive business growth.
            </Typography>
            <Stack direction={"row"} spacing={2} mt={2}>
              {/* <a href="https://github.com/FrostByte-Dev" target="_blank">
                <GitHubIcon />
              </a> */}
              <Link
                href="https://github.com/FrostByte-Dev"
                target="_blank"
                color={"#fff"}
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jacqueslevasseur/"
                target="_blank"
                color={"#fff"}
              >
                <LinkedInIcon />
              </Link>
            </Stack>
          </Box>
    );
}

export default ProfileCard