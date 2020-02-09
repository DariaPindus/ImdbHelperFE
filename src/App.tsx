import React from "react";
import logo from "./logo.svg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TopRatedComponent } from "./components/TopRatedComponent";
import { QueryComponent } from "./components/QueryComponent";
import {
  getTopRatedMoviesForGenre,
  isPersonTypecasted,
  findKevinBaconSeparationDegrees
} from "./api/Api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={4}>
        <QueryComponent
          inputLabel="Genre"
          title="Show top rated movies for the genre"
          execute={genre => getTopRatedMoviesForGenre(genre)}
        />
      </Grid>

      <Grid item xs={4}>
        <QueryComponent
          inputLabel="Person name"
          title="Check if person is typecasted"
          execute={name => isPersonTypecasted(name)}
        />
      </Grid>

      <Grid item xs={4}>
        <QueryComponent
          inputLabel="Person name"
          title="Find separation degree to Kevin Bacon"
          execute={name => findKevinBaconSeparationDegrees(name)}
        />
      </Grid>
    </Grid>
  );
};

export default App;
