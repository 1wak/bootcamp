import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ArticleCard, SkeletonLoad } from "../../components";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  title: {
    marginBottom: 10,
    fontSize: "34px !important",
  },
});

const BlogPage = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return loading ? (
    <div>
      <Typography variant="h1" align="center" className={classes.title}>
        Interview Tips
      </Typography>
      <div className={classes.card}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className={classes.card}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  ) : (
    <div className={classes.container}>
      <Typography variant="h1" align="center" className={classes.title}>
        Interview Tips
      </Typography>
      <div className={classes.card}>
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
      </div>
      <div className={classes.card}>
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
      </div>
    </div>
  );
};

export default BlogPage;
