import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Lessons.css'

class Lessons extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Lessons
        </DropdownToggle>
        <DropdownMenu>
          <div class="dropdown">
          <DropdownItem><NavLink className="navItem" id="dropdown-item" to="/variables">Variables</NavLink></DropdownItem>
          <DropdownItem><NavLink className="navItem" id="dropdown-item" to="/arrays">Arrays</NavLink></DropdownItem>
          <DropdownItem><NavLink className="navItem" id="dropdown-item" to="/loops">Loops</NavLink></DropdownItem>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Lessons;