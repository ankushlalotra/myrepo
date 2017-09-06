import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {douserReq} from '../../../redux/actions/index';
import {doUserdetReq} from '../../../redux/actions/userdetails';
import {doholdingsReq} from '../../../redux/actions/holdings';
import {doTRANSACTIONReq} from '../../../redux/actions/transaction';
import Userdetails from '../Userdetails/Userdetails'
import {douserticketsReq} from '../../../redux/actions/usertickets'

class SearchUser extends Component {

  constructor(props) {
    super(props);
    this.rowClick = this.rowClick.bind(this);

  }
  rowClick(id) {
    console.log(id);
    
    debugger;
    console.log(this.props.Users);
    this.props.getUser(id);
    this.props.holdingUser(id);
    this.props.transUser(id);
    this.props.getuserTickets(id);
    this.setState({detailSrch:1});
    
  }
  componentWillMount() {
    //this.props.getUsers();
  }

  render() {
    var usr = this.props.Users.SearchReducer.result;
    var self1 = this;
    if (usr.message === 'No User found') {
      return (
     <div className="card">
            <div className="card-header">
              <i className="fa fa-users fa-lg "></i>Users
            </div>
            <div className="card-block">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>user id</th>
                    <th>User name</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>
                      phone number</th>
                    <th>address</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td colSpan="7">There is no data to display</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>

      )
    } else if (usr.message === 'Users found') {
      var userTable = usr.data.map(function(usr) {

        return (
          <tr  key={usr.uid} className="clickable" onClick={() => {
            self1.rowClick(usr.uid)
          }}>
            <td>{usr.uid}</td>
            <td>{usr.username}</td>
            <td>{usr.withIdentity.firstname}</td>
            <td>{usr.withIdentity.lastname}</td>
            <td>{usr.email}</td>
            <td>{usr.cell_number}</td>
            <td>{usr.withIdentity.address0}</td>
          </tr>
        )

      }) ///end table map

      return (
     
          <div className="card">
            <div className="card-header">
              <i className="fa fa-users fa-lg "></i>Users
            </div>
            <div className="card-block">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>user id</th>
                    <th>User name</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>
                      phone number</th>
                    <th>address</th>

                  </tr>
                </thead>
                <tbody>
                  {userTable}
                </tbody>
              </table>


            </div>

          </div>

      )
    } else {
      return (
 
          <div className="card">
            <div className="card-header">
              <i className="fa fa-users fa-lg "></i>Users
            </div>
            <div className="card-block">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>user id</th>
                    <th>User name</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>
                      phone number</th>
                    <th>address</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td colSpan="7">There is no data to display</td>
                  </tr>
                </tbody>
              </table>

            </div>
         
          </div>
      
      )
    }

  }
}

function mapStateToProps(state) {
  const Users = state;
  console.log(state);
  console.log(Users);
  debugger;

  return {Users};
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      dispatch(douserReq());
    },
    getUser: (a) => {
      dispatch(doUserdetReq(a));
    },
    holdingUser: (a) => {
      dispatch(doholdingsReq(a));
    },
    transUser: (a) => {
      dispatch(doTRANSACTIONReq(a));
    },
    getuserTickets:(id)=>{
      dispatch(douserticketsReq(id));
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
