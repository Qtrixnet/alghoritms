import {FC} from "react";
import Grid from '@mui/material/Grid';
import Navigation from "../navigation/navigation";
import Visualizer from "../visualizer/visualizer";

const Main: FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Navigation />
      </Grid>
      <Grid item xs={10}>
        <Visualizer />
      </Grid>
    </Grid>
  );
};

export default Main;
