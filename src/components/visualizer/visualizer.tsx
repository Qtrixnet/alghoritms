import './visualizer.scss';
import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import ControlPanel from "../control-panel/control-panel";

const Visualizer: FC = () => {
  return (
    <Container fluid className="visualizer">
      <ControlPanel />
    </Container>
  );
};

export default Visualizer;
