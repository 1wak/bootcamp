import React, { Suspense, lazy, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import JobCard from "./JobCard";
const JobCard = lazy(() => import("./JobCard"));

const rangeGaji = [
  {
    value: "1",
    label: "< 5 Juta",
  },
  {
    value: "2",
    label: "5 - 10 Juta",
  },
  {
    value: "3",
    label: "> 10 Juta",
  },
];

const typeList = [
  {
    value: "1",
    label: "Full time",
  },
  {
    value: "2",
    label: "Part time",
  },
  {
    value: "3",
    label: "Internship",
  },
  {
    value: "4",
    label: "Remote work",
  },
];

const cityList = [
  {
    value: "1",
    label: "Jakarta",
  },
  {
    value: "2",
    label: "Yogyakarta",
  },
  {
    value: "3",
    label: "Bali",
  },
];

const jobList = [
  {
    id: 1,
    title: "Product Designer",
    description:
      "The ideal candidates is a team leader who is able to make effective decisions quickly. Ultimately, recruiting managers will manage our recruitment to ensure we hire qualified empolyees",
  },
  {
    id: 2,
    title: "Product Manager",
    description:
      "The ideal candidates is a team leader who is able to make effective decisions quickly. Ultimately, recruiting managers will manage our recruitment to ensure we hire qualified empolyees",
  },
  {
    id: 3,
    title: "Marketing",
    description:
      "The ideal candidates is a team leader who is able to make effective decisions quickly. Ultimately, recruiting managers will manage our recruitment to ensure we hire qualified empolyees",
  },
  {
    id: 4,
    title: "SEO Manager",
    description:
      "The ideal candidates is a team leader who is able to make effective decisions quickly. Ultimately, recruiting managers will manage our recruitment to ensure we hire qualified empolyees",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    padding: theme.spacing(2),
    display: "flex",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.03),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 6,
    padding: theme.spacing(0, 2),
    backgroundColor: fade(theme.palette.common.black, 0.08),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    height: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  inputSelect: {
    marginRight: theme.spacing(2),
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [gaji, setGaji] = useState(" ");
  const [tipe, setTipe] = useState(" ");
  const [city, setCity] = useState(" ");

  const handleGaji = (e) => setGaji(e.target.value);

  const handleType = (e) => setTipe(e.target.value);

  const handleCity = (e) => setCity(e.target.value);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.box} p={2}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search job..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.inputSelect}>
              <TextField
                select
                label="Range gaji"
                value={gaji}
                onChange={handleGaji}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {rangeGaji.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className={classes.inputSelect}>
              <TextField
                select
                label="Tipe pekerjaan"
                value={tipe}
                onChange={handleType}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {typeList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className={classes.inputSelect}>
              <TextField
                select
                label="Kota"
                value={city}
                onChange={handleCity}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {cityList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div style={{ display: "flex" }}>
              <Button className={classes.button}>Find jobs</Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Typography gutterBottom>
              Search results: {jobList.length}
            </Typography>
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                {jobList.map((data) => (
                  <div key={data.id}>
                    <JobCard title={data.title} des={data.description} />
                  </div>
                ))}
              </Suspense>
            </div>
            <div>
              {jobList.filter(function (e) {
                return e.title === "Product";
              })}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="info.main" color="info.contrastText" p={2}>
            <Card>
              <CardContent>
                <Typography>
                  Do you know a prospective candidate to recommend?
                </Typography>
                <Typography>
                  Refer him to us and receive a reward when he accepts an offer!
                </Typography>
                <Button>Suggest a friend</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography>Create a subscription for a candidate</Typography>
                <Typography>
                  Just enter your email to get all new jobs according to your
                  search filters.
                </Typography>
                <Button>Create a job alert</Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default JobList;
