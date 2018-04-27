import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";
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
        <Navbar color="light" light expand="sm">
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
                  <NavLink href="/Graph/">View Graph</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Edit Previous Entry
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

               {/* -----FAQ----- */}
              <NavItem>
                <NavLink href="/Faq/">FAQ</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/Profile">Profile</NavLink>
              </NavItem>
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
