import React from "react";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Navbar from "./components/Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
       <Navbar />
      <EmployeeTable />
    </div>
  );
}

export default App;
