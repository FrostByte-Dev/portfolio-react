import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      padding={2}
      border={2}
      borderRadius={2}
      borderColor={"primary.main"}
      bgcolor={"primary.main"}
      color={"#fff"}
      height={"100%"}
    >
      Welcome to my personal portfolio webpage. Here you will find a variety of
      projects I have worked on that range from pure programming, to server
      setup and much more.
    </Box>
  );
}

export default Home;
