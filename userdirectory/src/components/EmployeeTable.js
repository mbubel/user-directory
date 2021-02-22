import { Component } from "react";
import EmployeeTableData from "./EmployeeTableData";

class EmployeeTable extends Component {
  state = {
    results: [],
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={this.props.sortByName}>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Dob</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeTableData employeeList={this.props.employeeList} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
