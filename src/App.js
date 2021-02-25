import React, { Component } from "react";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import API from "./Utils/API";

class App extends Component {
  state = {
    results: [],
    filtered: "unfiltered",
  };
  componentDidMount() {
    API.search().then((res) => this.setState({ results: res.data.results }));
  }
  sortByName = () => {
    this.setState({
      results: [...this.state.results].sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      }),
    });
  };
  filterByName = () => {
    const userSearch = document.querySelector("#search").value.toLowerCase();
    const filteredEmployees = this.state.results.filter(
      (employee) => employee.name.first.toLowerCase().indexOf(userSearch) > -1
    );
    this.setState({
      filtered: filteredEmployees,
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar filterByName={this.filterByName} />
        <EmployeeTable
          employeeList={this.state.results}
          sortByName={this.sortByName}
          filteredEmployeeList={this.state.filtered}
        />
      </div>
    );
  }
}

export default App;
