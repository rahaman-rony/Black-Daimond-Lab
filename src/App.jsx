import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "1rem" }}></div>
      <Home />
    </div>
  );
}

export default App;
