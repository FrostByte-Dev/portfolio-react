import { Box, Typography } from "@mui/material";

interface Project {
  title: string;
  desc: string;
  url: string;
  createdDate: Date;
  tags?: string[];
}

const ProjectCard = (props: Project) => (
  <Box
    padding={2}
    border={2}
    borderRadius={2}
    borderColor={"primary.main"}
    bgcolor={"primary.main"}
    color={"#fff"}
    height={"300px"}
  >
    <Typography variant="h4" fontWeight={"bold"} gutterBottom>
      {props.title}
    </Typography>
    {props.desc}
  </Box>
);

export default ProjectCard;
