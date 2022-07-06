import './navigation.scss';
import {FC} from "react";
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
  return (
    <div className="navigation">
      <div className="navigation__item">
        <NavLink
          className="navigation__link"
          to="/quick-sort"
        >
          Пузырьковая сортировка
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
