import { Box, Typography } from "@mui/material";

function Projects() {
    return (
        <Box>
            <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Projects Page
            </Typography>
            </Box>
            <Box sx={{ my: 2 }}>
            {[...new Array(12)]
                .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            </Box>
        </Box>
    );
}

export default Projects