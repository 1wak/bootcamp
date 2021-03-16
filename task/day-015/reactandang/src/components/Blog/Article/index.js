import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { HeroImg } from "../../../assets";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const BlogPage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={HeroImg} title="Test" />
        <CardContent>
          <Typography variant="h5" component="h3">
            How to pass an Interview
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Share this article" placement="right">
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default BlogPage;
