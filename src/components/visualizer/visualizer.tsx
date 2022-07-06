import './visualizer.scss';
import React, {FC} from 'react';
import ControlPanel from "../control-panel/control-panel";

const Visualizer: FC = () => {
  return (
    <div className="visualizer">
      <ControlPanel />
    </div>
  );
};

export default Visualizer;
