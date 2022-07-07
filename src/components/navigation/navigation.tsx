import './navigation.scss';
import {FC} from "react";
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/bubble-sort">
            Сортировка пузырьком
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/selection-sort">
            Сортировка выбором
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/insert-sort">
            Сортировка вставками
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/merge-sort">
            Сортировка слиянием
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/quick-sort">
            Быстрая сортировка
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink className="navigation__link" to="/block-sort">
            Блочная сортировка
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
