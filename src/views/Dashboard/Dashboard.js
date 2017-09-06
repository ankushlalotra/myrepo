import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card">
    <div className="card-block">
        <div className="h1 text-muted text-right mb-2"><i className="icon-pie-chart"></i></div>
        <div className="h4 mb-0">50</div><small className="text-muted text-uppercase font-weight-bold">Pending Support tickets</small>
    </div>
</div>

          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
    <div className="card-block">
        <div className="h1 text-muted text-right mb-2"><i className="icon-pie-chart"></i></div>
        <div className="h4 mb-0">50</div><small className="text-muted text-uppercase font-weight-bold">Pending Verification</small>
    </div>
</div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
    <div className="card-block">
        <div className="h1 text-muted text-right mb-2"><i className="icon-speedometer"></i></div>
        <div className="h4 mb-0">2 Days </div><small className="text-muted text-uppercase font-weight-bold">Oldest support tickets</small>
    </div>
</div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
    <div className="card-block">
        <div className="h1 text-muted text-right mb-2"><i className="icon-speedometer"></i></div>
        <div className="h4 mb-0">2 Days </div><small className="text-muted text-uppercase font-weight-bold">Oldest verification pending</small>
    </div>
</div>
          </div>
          </div>

         
      </div>
    )
  }
}

export default Dashboard;
