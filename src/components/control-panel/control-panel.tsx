import './control-panel.scss';
import {FC} from 'react';
import Button from "../button/button";
// @ts-ignore
import shuffleIcon from '../../images/shuffle.svg';
// @ts-ignore
import playIcon from '../../images/play.svg';
// @ts-ignore
const ControlPanel: FC = ({handleChangeElementsCount, elementsCount}) => {
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
        // @ts-ignore
        onChange={handleChangeElementsCount}
      />
    </div>
  );
};

export default ControlPanel;
