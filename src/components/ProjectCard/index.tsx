import { Box } from "@mui/material"; 

interface Project {
    title: string;
    desc: string;
    url: string;
    createdDate: Date;
    tags?: string[];
}

function ProjectCard(props: Project) {
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
      {props.desc}
    </Box>
  );
}

export default ProjectCard;
