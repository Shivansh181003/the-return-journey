import { Grid, Stack, Card } from "@mui/material";
import React from "react";
import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";

export default function Group() {
  return (
    <Grid
      container
      minHeight={600}
      //   sx={{ flexGrow: 1, border: "2px solid grey" }}
    >
      {/* <Divider orientation="vertical" /> */}
      <Stack direction={"row"} spacing={3} mt={4}>
        <Card>
          <Grid
            container
            maxWidth={400}
            // maxHeight={400}
            //   sx={{ flexGrow: 1, border: "2px solid grey" }}
          >
            <LeftContainer />
          </Grid>
        </Card>
        <Card>
          <Grid
            container
            // sx={{ flexGrow: 1, border: "2px solid grey" }}
          >
            <RightContainer />
          </Grid>
        </Card>
        {/* <Divider orientation="vertical" /> */}
      </Stack>
    </Grid>
  );
}
