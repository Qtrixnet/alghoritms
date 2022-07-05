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
        >Quick sort</NavLink>
      </ListGroup.Item>
      <ListGroup.Item className="navigation__item">
        <NavLink
          className="navigation__link"
          to="/merge-sort"
        >Merge sort</NavLink>
      </ListGroup.Item>
      <ListGroup.Item className="navigation__item">
        <NavLink
          className="navigation__link"
          to="/heap-sort"
        >Heap sort</NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Navigation;
