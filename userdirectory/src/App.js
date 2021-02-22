import React, { Component } from "react";
import Header from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import API from "./Utils/API";

class App extends Component {
  state = {
    results: [],
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

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <EmployeeTable employeeList={this.state.results} sortByName = {this.sortByName}/>
      </div>
    );
  }
}

export default App;
