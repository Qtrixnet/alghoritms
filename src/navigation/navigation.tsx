import {FC} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NavLink to="/quick-sort">
            Quick sort
          </NavLink>
        </Col>
      </Row>
      <Row>
        <NavLink to="/merge-sort">
          Merge sort
        </NavLink>
      </Row>
      <Row>
        <NavLink to="/heap-sort">
          Heap sort
        </NavLink>
      </Row>
    </Container>
  );
};

export default Navigation;
