import './app.scss';
import {FC} from "react";
import {Container} from "@mui/material";
import Header from "../header/header";
import Main from "../main/main";


const App: FC = () => {
  return (
    <Container maxWidth={false}>
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;
