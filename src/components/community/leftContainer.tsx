import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";

export default function LeftContainer() {
  const people = ["ABC", "XYZ", "QWE"];
  return (
    <>
      <Stack
        px={5}
        width={400}
        spacing={3}
      >
        {people.map((person) => (
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe" />}
              title={`@${person}`}
              subheader="September 14, 2016"
            />
          </Card>
        ))}
      </Stack>
      
    </>
  );
}
