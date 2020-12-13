import React, { useState } from "react";
import Header from "./components/Header"
import Table from "./components/Table";
import { Employee } from "./components/Employee";

function App() {
    const [employees, setEmployees] = useState([]);
    const [displayedEmployees, setDisplayedEmployees] = useState([]);
  
    return (
      <div className="App">
        <Employee.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
          <Header />
          <Table />
        </Employee.Provider>
      </div>
  );
}

export default App;
