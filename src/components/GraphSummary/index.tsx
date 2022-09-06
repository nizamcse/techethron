import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const GraphSummary = () => {
  return (
    <Box mb={4} mt={4}>
      <Grid container spacing={4}>
        <Grid item>
          <Box>
            <Typography>Max upward</Typography>
            <Typography component="h3" variant="h3">
              60 mm
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography>downward</Typography>
            <Typography component="h3" variant="h3">
              -190 mm
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography>Average</Typography>
            <Typography component="h3" variant="h3">
              -52 mm/year
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphSummary;
