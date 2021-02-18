import { Component } from "react";
import EmployeeTableData from "./EmployeeTableData";
import API from "../Utils/API";


class EmployeeTable extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }
  searchEmployees = () => {
    API.search().then((res) =>
      this.setState({ results: res.data.results })
    );
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Dob</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeTableData employeeList={this.state.results} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
