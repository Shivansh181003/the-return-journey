"use client";
import React, { useState, createContext } from "react";
import CategorySelector from "./community/categorySelector";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ContentSelector from "./community/contentSelector";
import { Button, Card, Divider, Stack } from "@mui/material";
import LeftContainer from "./community/leftContainer";
import RightContainer from "./community/rightContainer";
import Group from "./community/group";

export default function ComunityComponent() {
  const [selectedContent, setSelectedContent] = useState("Group");

  //   const ContentContext = createContext(content);
  const content = ["Group", "Add Friend", "Announcements", "Support", "Chat"];

  const renderSelectedContent = () => {
    if (selectedContent === "Group") {
      return <Group />;
    }
    return null;
    // Add more conditions here for the other content options
  };

  const handleContentChange = (content: React.SetStateAction<string>) => {
    setSelectedContent(content);
  };
  return (
    // <ContentContext.Provider value={content}>
    <>
      <Box
        // height={800}
        // width={700}
        alignItems="center"
        margin={3}
        // sx={{ flexGrow: 1, border: "2px solid grey" }}
      >
        <Grid
          margin={1}
          container
          minHeight={70}
          //   maxWidth={700}
          display={"flex"}
          //   justifyContent={"center"}
          //   alignItems={"center"}
          // sx={{ flexGrow: 1, border: "2px solid grey" }}
          flexDirection={"column"}
          gap={2}
          mx={4}
        >
          <Divider component="div" textAlign="left">
            Select Category
          </Divider>
          <CategorySelector />
          <Divider component="div" />
        </Grid>
        <Grid
          margin={1}
          container
          minHeight={50}
          display={"flex"}
          flexDirection={"column"}

          //   sx={{ flexGrow: 1, border: "2px solid grey" }}
        >
          {selectedContent}
          <Stack direction="row" mx={3} my={1} spacing={2} padding={1}>
            {content.map((item) => (
              <Button
                onClick={() => {
                  setSelectedContent(item);
                }}
                variant="outlined"
              >
                {item}
              </Button>
            ))}
          </Stack>
          <Divider component="div" />
        </Grid>
        {renderSelectedContent}
      </Box>
    </>
    // </ContentContext.Provider>
  );
}
