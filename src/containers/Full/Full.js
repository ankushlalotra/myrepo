import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Marketing from '../../views/Marketing/';
import Otc from '../../views/Otc/'
import Reports from '../../views/Reports/'
import Supporttickets from '../../views/Supporttickets/'
import Verifications from '../../views/Verifications/'
import Settings from '../../views/Settings/'
import Users from '../../views/Users/'
import Ticketdetails from '../../views/Supporttickets/ticketdetail/ticketdetail.js'


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/Marketing" name="Markeiting" component={Marketing} />
                <Route path="/otc" name="Otc" component={Otc} />
                <Route path="/users" name="Users" component={Users} />
                 <Route path="/Supporttickets" name="Supporttickets" component={Supporttickets} />
                <Route path="/verifications" name="Verifications" component={Verifications} />
                <Route path="/settings" name="Settings" component={Settings} />
                <Route path="/reports" name="Reports" component={Reports} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
