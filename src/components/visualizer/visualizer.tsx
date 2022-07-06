import React, {FC} from 'react';
import ControlPanel from "../control-panel/control-panel";
import {Stack} from "@mui/material";

const Visualizer: FC = () => {
  return (
    <Stack>
      <ControlPanel />
    </Stack>
  );
};

export default Visualizer;
