import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const SkeletonLoad = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Skeleton className={classes.media} variant="rect" animation="wave" />
      </CardMedia>
      <CardContent>
        <Skeleton
          animation="wave"
          height={16}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={16} />
        <Skeleton animation="wave" height={16} />
        <Skeleton animation="wave" height={16} />
      </CardContent>
    </Card>
  );
};

export default SkeletonLoad;
