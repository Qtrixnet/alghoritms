import {FC} from "react";
import Grid from '@mui/material/Grid';

const Main: FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        1
      </Grid>
      <Grid item xs={10}>
        2
      </Grid>
    </Grid>
  );
};

export default Main;
