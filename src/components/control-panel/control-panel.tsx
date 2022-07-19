import './control-panel.scss';
import {FC} from 'react';
import Button from "../button/button";
// @ts-ignore
import shuffleIcon from "../../images/shuffle.svg";
// @ts-ignore
import playIcon from "../../images/play.svg";

interface IControlPanel {
  setElementsCount: (evt: any) => void,
  elementsCount: number,
}

const ControlPanel: FC<IControlPanel> = ({setElementsCount, elementsCount}) => {
  return (
    <div className="control-panel">
      <Button icon={shuffleIcon}>
        Перемешать
      </Button>
      <Button icon={playIcon}>
        Запустить
      </Button>
      <span className="control-panel__elements">Элементы: {elementsCount}</span>
      <input
        className="control-panel__range"
        value={elementsCount}
        min="10"
        max="1000"
        step={10}
        type="range"
        onChange={setElementsCount}
      />
    </div>
  );
};

export default ControlPanel;
