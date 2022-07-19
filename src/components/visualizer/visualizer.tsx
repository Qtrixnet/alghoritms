import './visualizer.scss';
import React, {FC, useState} from 'react';
import ControlPanel from "../control-panel/control-panel";

const Visualizer: FC = () => {
  const [elementsCount, setElementsCount] = useState(10);

  return (
    <div className="visualizer">
      <ControlPanel
        setElementsCount={setElementsCount}
        elementsCount={elementsCount}
      />
    </div>
  );
};

export default Visualizer;
