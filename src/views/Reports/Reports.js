import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

class Reports extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  
                </div>
                <h4 className="mb-0">50</h4>
                <p>Pending Support tickets </p>
              </div>
              
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  
                </div>
                <h4 className="mb-0">40</h4>
                <p>Pending Verification</p>
              </div>
              
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  
                </div>
                <h4 className="mb-0">9 days</h4>
                <p>Oldest support tickets</p>
              </div>
              
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-success">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  
                </div>
                <h4 className="mb-0">4 days</h4>
                <p>Oldest verification pending </p>
              </div>
              
            </div>
          </div>
          </div>

         
      </div>
    )
  }
}

export default Reports;
