import './visualizer.scss';
import React, {FC, useState} from 'react';
import ControlPanel from "../control-panel/control-panel";

const Visualizer: FC = () => {
  const [elementsCount, setElementsCount] = useState(10);

  // @ts-ignore
  const handleChangeElementsCount = (evt) => {
    setElementsCount(evt.target.value)
  }

  return (
    <div className="visualizer">
      <ControlPanel
        // @ts-ignore
        elementsCount={elementsCount}
        // @ts-ignore
        handleChangeElementsCount={handleChangeElementsCount}
      />
    </div>
  );
};

export default Visualizer;
