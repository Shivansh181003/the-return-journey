"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Divider, Stack } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RightContainer() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const suggestion = ["ABC", "XYZ", "QWE"];

  return (
    <>
      <Stack direction={"column"}>
        <Typography>Suggestions For You</Typography>
        <Stack spacing={4} height={310} direction={"row"} margin={4}>
          {suggestion.map((person) => (
            <Card sx={{ maxWidth: 345, width: 270 }}>
              <Stack alignItems={"center"}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500], height: 150, width: 150 }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                />
              </Stack>

              <CardContent>
                <Typography textAlign={"center"}>{`@${person}`}</Typography>
                <Typography
                  textAlign={"center"}
                  variant="body2"
                  color="text.secondary"
                >
                  {`@${person}`}
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Stack
                  width={310}
                  alignItems={"center"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  justifyItems={"center"}
                >
                  <Button>Follow</Button>
                </Stack>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
