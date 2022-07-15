import './main.scss';
import React, {FC} from "react";
import Navigation from "../navigation/navigation";
import {Route, Routes} from "react-router-dom";
import Welcome from "../welcome/welcome";

const Main: FC = () => {
  return (
    <main className="main">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
      </Routes>
    </main>
  );
};

export default Main;
