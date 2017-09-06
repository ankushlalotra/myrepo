import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard <span className="badge badge-info">NEW</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/users'} className="nav-link" activeClassName="active">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/supporttickets'} className="nav-link" activeClassName="active">Support Tickets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/verifications'} className="nav-link" activeClassName="active">Verifications</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/marketing'} className="nav-link" activeClassName="active">Marketing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/settings'} className="nav-link" activeClassName="active">Settings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/otc'} className="nav-link" activeClassName="active">OTC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/reports'} className="nav-link" activeClassName="active">Reports</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
