import './navigation.scss';
import {FC} from "react";
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
  return (
    <ListGroup className="navigation">
      <ListGroup.Item className="navigation__item">
        <NavLink
          className="navigation__link"
          to="/quick-sort"
        >
          Пузырьковая сортировка
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Navigation;
