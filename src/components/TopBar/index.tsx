import {
  AppBar,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <AppBar position="static" elevation={0} sx={{ borderRadius: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IO Jack
        </Typography>
        <Divider />
        <Stack direction="row" spacing={2}>
          <Button component={NavLink} to={"/"} sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button component={NavLink} to={"/About"} sx={{ color: "#fff" }}>
            About
          </Button>
          <Button component={NavLink} to={"/Projects"} sx={{ color: "#fff" }}>
            Projects
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
