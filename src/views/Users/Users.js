import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import SearchUser from './SearchUser/SearchUser'
import $ from 'jquery';
import Userdetails from './Userdetails/Userdetails'
import { connect } from 'react-redux';
import { douserReq } from '../../redux/actions/index';
import { doSearchReq } from '../../redux/actions/search';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state={

      column:"all",option:"like",searchText:" ",detailSrch:0
    }
    /* this.openuserPopup = this.openuserPopup.bind(this);*/
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleInputChange(event){
const target = event.target;
const name=target.name;
let value=target.value;


if (target.id === "input3-group2")
{
 console.log(this.state.option);
 //debugger;
if (this.state.option==="like" || this.state.column === "all"){
 value = "%" + value.trim() + "%"
}
}

this.setState({[name]:value})
console.log(this.state);
}
handleSubmit(event){
debugger;
event.preventDefault();
console.log("S",JSON.stringify(this.state));

this.props.filter(JSON.stringify(this.state));
//this.setState({column:"all",option:"like",searchText:" "})
$("#input3-group2").val(" ");
}
componentWillMount() {
  // this.props.getUsers();
 }

  render() {
 var iValue = localStorage['record'] || 0;
      if (iValue == 1){
        alert("Record update successfully");
        localStorage.clear();
      }

    return (


      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
           <div className="card">
              <div className="card-header">
                <strong>Search</strong>
              </div>
              <div className="card-block">
                <form onSubmit={this.handleSubmit} className="form-inline">
                  <div className="form-group">
                    <label htmlFor="Input"></label>
                    <select id="Input" name="column" className="form-control" value={this.state.column} onChange={this.handleInputChange}>
                        <option value="all">All</option>
                        <option value="Username">User name</option>
                        <option value="firstname">first name</option>
                        <option value="lastname">last name</option>
                        <option value="email">email </option>
                        <option value="uid">user id</option>
                        <option value="phoneNumber">phone number</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Input1"></label>
                    <select id="Input1" name="option" className="form-control" value={this.state.option} onChange={this.handleInputChange}> 
                        <option value="like">contains</option>
                        <option value="=">equal to</option>
                      </select>
                  </div>
                  <div className="input-group">

                     <input type="text" id="input3-group2" name="searchText" className="form-control" value={this.state.Text} placeholder="Search" onChange={this.handleInputChange} required />
                      <span className="input-group-btn">
                        <button  type="submit"  className="btn btn-primary">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                </div>
                </form>
              </div>



          </div>
          <SearchUser />
           <Userdetails />
        </div>
        </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  const Users = state;
  

  return { Users };
}

function mapDispatchToProps(dispatch) {
    return {
    getUsers: () => {
      dispatch(douserReq());
    },
    filter:(item)=>{
      dispatch(doSearchReq(item));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
