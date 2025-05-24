import React from "react";
import Sidebar from "./Component/Sidebar";
import Player from "./Component/Player";
import Display from "./Component/Display";
import "../src/index.css";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
