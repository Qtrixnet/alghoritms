import {Row, Col} from "react-bootstrap";
import {FC} from "react";

const Header: FC = () => {
  return (
    <Row className="header">
      <Col className="header__column">
        <h1 className="header__title">
          Sort Visualizer
        </h1>
      </Col>
    </Row>
  );
};

export default Header;
