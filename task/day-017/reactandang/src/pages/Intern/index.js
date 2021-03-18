import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Intern } from "../../components";

const useStyles = makeStyles({
  title: {
    fontSize: "34px !important",
  },
});

const InternPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        bgcolor="info.main"
        height={200}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" className={classes.title}>
          Find Virtual Internship
        </Typography>
      </Box>
      <Intern />
    </div>
  );
};

export default InternPage;
