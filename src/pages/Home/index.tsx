import { Box, Grid } from "@mui/material";
import ProfileCard from "../../components/ProfileCard";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Unraid NAS",
    desc: "To improve the home entertainment experience, I built myself a NAS for storing my family’s media library (movies, music, photos), as well as provide redundant storage for my own personal files. Seeing as prebuilt NAS devices tend to be either highly underpowered or extremely expensive, I decided to recycle and repurpose some parts I had to save on costs.",
    url: "",
    createdDate: new Date(),
  },
  {
    title: "Shedman",
    desc: "For this project, I was hired by a local business as a web developer to update their aging website and to create a responsive design that would improve SOE as well as give it a cohesive experience between desktop and mobile.",
    url: "",
    createdDate: new Date(),
  },
  {
    title: "Arcade Stick",
    desc: "As a fun side project, I built myself an arcade stick for playing classic arcade games as well as the latest fighting games. At the time I wanted an arcade stick to get that classic arcade feeling however I didn’t want to break the bank. So I set out to build my own using materials I had laying around the house and only buying parts when needed.",
    url: "",
    createdDate: new Date(),
  },
];

const Home = () => (
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
        of projects I have worked on that range from pure programming, to server
        setup and much more.
      </Box>
    </Grid>
      {projects.map((project) => (
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <ProjectCard {...project} />
        </Grid>
      ))}
  </Grid>
);

export default Home;
