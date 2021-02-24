function EmployeeTableData(props) {
  const employeesToRender =
    props.filteredEmployeeList === "unfiltered"
      ? props.employeeList
      : props.filteredEmployeeList;
  return (
    <>
      {employeesToRender &&
        employeesToRender.map((result) => (
          <tr>
            <td>
              <img src={result.picture.medium} alt={result.name.first} />
            </td>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))}
    </>
  );
}

export default EmployeeTableData;
