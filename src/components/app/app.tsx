import './app.scss';
import {FC} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import Navigation from "../navigation/navigation";
import Header from "../header/header";
import Visualizer from "../visualizer/visualizer";

const App: FC = () => {
  return (
    <Container fluid className="app">
      <Header/>
      <Row>
        <Col sm="2">
          <Navigation/>
        </Col>
        <Visualizer />
      </Row>
    </Container>
  );
}

export default App;
