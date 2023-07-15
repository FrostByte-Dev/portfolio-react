import { Box, Grid, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";

function BannerCard({ children }: { children: React.ReactNode }) {
  return (
    <Box border={2} borderRadius={2} borderColor={"primary.main"}>
      <Grid container>
        <Grid
          item
          xs={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"primary.main"}
        >
          <DescriptionIcon sx={{ color: "#fff", fontSize: 64 }} />
        </Grid>
        <Grid item xs={8} p={2} color={"primary.main"}>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Jacques Levasseur
            </Typography>
          </Box>
          <Box my={2}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BannerCard;
