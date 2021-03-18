import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const JobCard = ({ title, des }) => {
  return (
    <div className="job__card">
      <Card>
        <CardContent>
          <Typography variant="h2">{title}</Typography>
          <Typography>{des}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobCard;
