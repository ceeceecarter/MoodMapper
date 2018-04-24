import React from 'react';
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="strap-nav">
        <Navbar color="light-blue" light expand="sm">
          <NavbarBrand href="/">Mood|Mapper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {/* -----Create new----- */}
            <NavItem>
                <NavLink href="/survey/">Create New</NavLink>
              </NavItem>

               {/* -----MoodHistory---- */}

                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Mood History
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                     View Graph
                  </DropdownItem>
                  <DropdownItem>
                    Edit Previous Entry
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

               {/* -----FAQ----- */}
              <NavItem>
                <NavLink href="/faq/">FAQ</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Your Profile
                  </DropdownItem>
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}