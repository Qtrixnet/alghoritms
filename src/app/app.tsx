import {FC} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import Navigation from "../navigation/navigation";

const App: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          Header
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <Navigation />
        </Col>
        <Col>Content</Col>
      </Row>
    </Container>
  );
}

export default App;
