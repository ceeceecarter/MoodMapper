import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";
import Main from "../Main";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li
      className={
        window.location.pathname === "/" ? "nav-link active" : "nav-link"
      }
    >
      <Link to="/" className="nav-link">
        Mood Mapper
      </Link>
    </li>

    <li
      className={
        window.location.pathname === "/Survey" ? "nav-link active" : "nav-link"
      }
    >
      <Link to="/Survey" className="nav-link">
        Create New
      </Link>
    </li>

    <li
      className={
        window.location.pathname === "/Graph" ? "nav-link active" : "nav-link"
      }
    >
      <Link to="/Graph" className="nav-link">
        Graph
      </Link>
    </li>

    <li
      className={
        window.location.pathname === "/Faq" ? "nav-link active" : "nav-link"
      }
    >
      <Link to="/Faq" className="nav-link">
        Faq
      </Link>
    </li>

    <li
      className={
        window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"
      }
    >
      <Link to="/Faq" className="nav-link">
        Profile
      </Link>
    </li>

  </ul>
);
export default NavTabs;

// export default class navbar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div className="strap-nav">
//         <Navbar color="light-blue" light expand="sm">
//           <NavbarBrand href="/">Mood|Mapper</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>

//               {/* -----Create new----- */}
//             <NavItem>
//                 <NavLink href="./Pages/Survey/">Create New</NavLink>
//               </NavItem>

//                {/* -----MoodHistory---- */}

//                 <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Mood History
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem>
//                      View Graph
//                   </DropdownItem>
//                   <DropdownItem>
//                     Edit Previous Entry
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>

//                {/* -----FAQ----- */}
//               <NavItem>
//                 <NavLink href="/faq/">FAQ</NavLink>
//               </NavItem>

//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Profile
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem>
//                     Your Profile
//                   </DropdownItem>
//                   <DropdownItem>
//                     Logout
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
