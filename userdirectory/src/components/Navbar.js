import React, { Component } from "react";

class Navbar extends Component {
  state = {
    results: [],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <nav>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>{" "}
              <input placeholder="name" type="search" />
            </nav>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
export default Navbar;
