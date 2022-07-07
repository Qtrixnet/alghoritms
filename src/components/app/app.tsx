import {FC} from "react";
import Header from "../header/header";
import Main from "../main/main";


const App: FC = () => {
  return (
    <div className="app">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
