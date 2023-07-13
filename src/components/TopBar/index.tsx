import { AppBar, Box, Button, Divider, Toolbar, Typography } from "@mui/material";

const navItems = ['Home', 'About', 'Projects'];

function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    IO Jack
                </Typography>
                <Divider />
                <Box sx={{ display: 'block' }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar