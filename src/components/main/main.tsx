import './main.scss';
import {FC} from "react";
import Navigation from "../navigation/navigation";
import Visualizer from "../visualizer/visualizer";

const Main: FC = () => {
  return (
    <main className="main">
      <Navigation/>
      <Visualizer/>
    </main>
  );
};

export default Main;
