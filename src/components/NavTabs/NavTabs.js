import React from 'react';
import "./NavTabs.css";
import Main from "../Main";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';
  

  const NavTabs = props => (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Mood | Mapper
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => props.handlePageChange("Survey")}
          className={
            props.currentPage === "Survey" ? "nav-link active" : "nav-link"
          }
        >
          Add Entry
        </a>
      </li>

      <li className="nav-item">
        <a
          onClick={() => props.handlePageChange("History")}
          className={
            props.currentPage === "History" ? "nav-link active" : "nav-link"
          }
        >
         Mood History
        </a>
      </li>

     <li className="nav-item">
        <a
          onClick={() => props.handlePageChange("Faq")}
          className={
            props.currentPage === "Faq" ? "nav-link active" : "nav-link"
          }
        >
          Faq
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => props.handlePageChange("Profile")}
          className={
            props.currentPage === "Profile" ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </a>
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