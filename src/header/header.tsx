import './header.scss';
import {Row, Col} from "react-bootstrap";

const Header = () => {
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
