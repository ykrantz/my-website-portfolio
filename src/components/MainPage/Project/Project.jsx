import "./Project.css";

// import React from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubButton from "../GitHubButton/GitHubButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// export default function RecipeReviewCard() {
const Project = ({
  project: {
    frameWork,
    projectName,
    image,
    url,
    gitHubUrlClient,
    gitHubUrlServer,
    avatar,
    active,
    details,
    features,
  },
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    active && (
      <Card className="Project-card" sx={{ maxWidth: 345 }}>
        <div className="Project-CardHeader">
          <CardHeader
            avatar={
              <Tooltip title={projectName}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {avatar}
                </Avatar>
              </Tooltip>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // title={projectName}
            title={
              <a href={url} target="_blank">
                {projectName}
              </a>
            }
            subheader={frameWork}
          />
          <a href={url} target="_blank">
            <CardMedia
              component="img"
              height="194"
              image={image}
              alt={projectName}
            />
          </a>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing>
          {gitHubUrlClient && (
            <GitHubButton gitHubUrl={gitHubUrlClient} urlType="client" />
          )}
          {gitHubUrlServer && (
            <GitHubButton gitHubUrl={gitHubUrlServer} urlType="server" />
          )}

          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <b>Features:</b>
            </Typography>
            {features.map((feature) => (
              <Typography paragraph>{feature}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    )
  );
};

// const Project = ({ project: { title, projectName, image, url } }) => {
//   console.log({ title, projectName, image, url });
//   return (
//     <div>
//       <h1>{projectName}</h1>
//       <h5>{title}</h5>
//       <img className="Project-img" src={image} alt={projectName}></img>
//       <br></br>
//       <a href={url}>{projectName}</a>
//     </div>
//   );
// };

export default Project;
