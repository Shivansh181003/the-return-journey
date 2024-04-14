import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export default function CategorySelector() {
  const category = [
    "Camel",
    "Elephant",
    "Cheetah",
    "Lion",
    "Sloth",
    "Meerkat",
    "Chimp",
    "Panda",
  ];

  return (
    <Box height={70} width={700} alignItems="center" sx={{}}>
      <Grid container minHeight={70}>
        <Stack direction="row" spacing={4}>
          {category.map((item) => (
            <Button  >
              <Grid xs justifyContent="center" display="flex" flexDirection="column" alignItems="center">
                <Avatar src={`/static/images/avatar/${item}.jpg`} />
                {item}
              </Grid>
            </Button>
          ))}
        </Stack>
      </Grid>
    </Box>
  );
}
