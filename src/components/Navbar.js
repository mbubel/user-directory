function Navbar(props) {
  return (
    <div>
      <button onClick={props.filterByName}>Search</button>
      <input id="search" />
    </div>
  );
}

export default Navbar;
