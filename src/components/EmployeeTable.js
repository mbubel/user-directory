import EmployeeTableData from "./EmployeeTableData";
import "../styles/Navbar.css";

function EmployeeTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th className="name" onClick={props.sortByName}>
              Name
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>Dob</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeTableData
            employeeList={props.employeeList}
            filteredEmployeeList={props.filteredEmployeeList}
          />
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
