import './main.scss';
import React, {FC} from "react";
import Navigation from "../navigation/navigation";
import {Route, Routes} from "react-router-dom";
import Welcome from "../welcome/welcome";
import Visualizer from "../visualizer/visualizer";

const Main: FC = () => {
  return (
    <main className="main">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/bubble-sort" element={<Visualizer/>}/>
        <Route path="/quick-sort" element={<Visualizer/>}/>
        <Route path="/merge-sort" element={<Visualizer/>}/>
      </Routes>
    </main>
  );
};

export default Main;
