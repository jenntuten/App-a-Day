import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          Lessons Dropdown
        </DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem>HTML</DropdownItem>
          <DropdownItem>CSS</DropdownItem>
          <DropdownItem>JavaScript</DropdownItem>
          
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Lessons;