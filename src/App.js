import React from "react";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";

const App = () => (
  <>
    <Header />
    <div className="container">
      <Dashboard />
    </div>
  </>
);

export default App;
