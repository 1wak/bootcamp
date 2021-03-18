import React from "react";
import { JobList } from "../../components";
import { Helmet } from "react-helmet";

const JobPage = () => {
  return (
    <div>
      <Helmet>
        <title>Lakerja: Find a Job You Loves</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <JobList />
    </div>
  );
};

export default JobPage;
