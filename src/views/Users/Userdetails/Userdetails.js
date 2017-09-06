import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames'
import {connect} from 'react-redux';
import {doUserdetReq} from '../../../redux/actions/userdetails';
import {douserUpdateReq } from '../../../redux/actions/userUpdate';
import {doholdingsReq} from '../../../redux/actions/holdings';
import {doTRANSACTIONReq} from '../../../redux/actions/transaction';
import {douserticketsReq
} from '../../../redux/actions/usertickets';

class Userdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      formData :{
              user_id:"",
              firstname:"",
              username:"",
              cell_number:"",
              lastname:"",
              address0:"",
              province:"",
              country:"",
              postalcode:"",
              city:"",
              dateofbirth:""
      }

    };
    this.toggleTab = this.toggleTab.bind(this);
    //this.props.getUser();
    /* this.openuserPopup = this.openuserPopup.bind(this);*/
    this.handleChange=this.handleChange.bind(this);
   this.updateUser=this.updateUser.bind(this); 
  }
  handleChange(event){
const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
var formData=this.state.formData;
formData[name]=value
    this.setState({
      formData: formData
    });
  }
  componentWillMount() {
    // this.props.getUser();
    //this.props.getHoldings();
    //this.props.getuserTickets(1);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }
  }
  /*
  openuserPopup(){

    return ()
  }
*/
editable(event){

console.log(event.target.class);


}
updateUser(){



var params=JSON.stringify(this.state.formData)

  this.props.getUserUpdate(params);
this.props.getUser(this.state.formData.user_id)
localStorage.setItem("record",1);

document.location.reload();



}
shouldComponentUpdate(nextProps, nextState) {
 
  return true;
}
componentWillReceiveProps(nextProps) {
debugger;
 if (this.props.Users.userdetReducer.result.data){
 debugger;
 var usr=this.props.Users.userdetReducer.result.data;
 var dateTime = usr[0].withIdentity.dateofbirth;
var date=new Date(dateTime);
 var date1=date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
 var formData=this.state.formData;
 formData.user_id = usr[0].uid;
      formData.firstname = usr[0].withIdentity.firstname;
      formData.username = usr[0].username;
      formData.address0 = usr[0].withIdentity.address0;
      formData.cell_number = usr[0].cell_number;
     formData.lastname = usr[0].withIdentity.lastname;
      formData.province = usr[0].withIdentity.province;
      formData.country = usr[0].withIdentity.country;
      formData.postalcode = usr[0].withIdentity.postalcode;
     formData.city = usr[0].withIdentity.city;
      formData.dateofbirth = date1;
 this.setState({
  formData:formData
})
 }
}
 
  render() {
    var self=this;
    console.log(this.props);
    var usr = this.props.Users.userdetReducer.result;
    if (usr.message) {
      var foundUsr = usr.data;
      var form = usr.data.map(function(user) {
        return (
          <div className="card">
            <div className="card-header">
              <strong>Account</strong>
              <small>Details</small>
            </div>
            <div className="card-block">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="company">first name</label>
                  <input onChange={self.handleChange}  type="text" className="form-control" id="company" placeholder="first name" name="firstname" value={self.state.formData.firstname}/>

                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="company">last name</label>
                  <input type="text" onChange={self.handleChange} className="form-control" id="company" placeholder="last name" name="lastname" value={self.state.formData.lastname}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vat">username</label>
                <input onChange={self.handleChange} type="text" className="form-control" id="vat" placeholder="PL1234567890" name="username" value={self.state.formData.username} />
              </div>
              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="textarea-input">Verification Status</label>
                <div className="col-md-9">
                  <select id="select" name="select" className="form-control">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="vat">Date of Birth</label>
                <input type="text" className="form-control" onChange={self.handleChange} id="vat" placeholder="PL1234567890" name="dateofbirth" value={self.state.formData.dateofbirth}/>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="street">UID</label>
                  <input  onChange={self.handleChange} type="text" className="form-control" id="street" placeholder="Enter User ID" name="user_id" value={user.uid}/>
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="street">Contact No</label>
                  <input onChange={self.handleChange} type="tel" className="form-control" id="street" placeholder="Enter cell no" name="cell_number" value={self.state.formData.cell_number}/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-md-3 form-control-label" for="textarea-input">Address</label>
                <div className="col-md-9">
                  <textarea onChange={self.handleChange} id="textarea-input" name="textarea-input" rows="9" name="address0" value={self.state.formData.address0} className="form-control" placeholder="Content.."></textarea>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="city">province</label>
                  <input onChange={self.handleChange} type="text" className="form-control" id="city" placeholder="Enter your Provience" name="province" value={self.state.formData.province}/>
                </div>

                <div className="form-group col-sm-4">
                  <label htmlFor="city">City</label>
                  <input onChange={self.handleChange} type="text" className="form-control" id="city" placeholder="Enter your city" name="city" value={self.state.formData.city}/>
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="postal-code">Postal Code</label>
                  <input onChange={self.handleChange} type="text" className="form-control" id="postal-code" placeholder="Postal Code" name="postalcode" value={self.state.formData.postalcode}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input  onChange={self.handleChange} type="text" className="form-control" id="country" placeholder="Country name" name="country" value={self.state.formData.country}/>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" onClick={self.updateUser} className="btn btn-sm btn-primary">
                <i className="fa fa-dot-circle-o"></i>
                Submit
              </button>

            </div>
          </div>
        )
      })
      if (this.props.Users.holdingsReducer.result.message === "Users found") {
        var hUsr = this.props.Users.holdingsReducer.result;
        if (hUsr.message) {
          var foundUsr = hUsr.data;
          var holdings = hUsr.data.map(function(h) {
            return (
              <tr key={h.uid}>
                <td>{h.withCurrencies.ticker}</td>
                <td>{h.balance}</td>
                <td>{h.available}</td>
              </tr>
            )

          })
        }
      }
      debugger;
      if (this.props.Users.userticketsReducer.result.message === "Tickets found") {
        console.log("Found");
        var hUsr = this.props.Users.userticketsReducer.result;
        debugger;
        if (hUsr.message) {
          var foundUsr1 = hUsr.data;
          var tickets = hUsr.data.map(function(h,index) {
            return (
              <tr key={index}>
                <td>{h.tid}</td>
                 <td>{h.key}</td>
                  <td>{h.created}</td>
                   <td>{h.status}</td>
                    <td>{h.category}</td>
                     
              </tr>
            )

          })
        }
      }
      if (this.props.Users.transactionReducer.result.message === "Users found") {
        var hUsr1 = this.props.Users.transactionReducer.result;
        if (hUsr1.message) {
          var foundUsr = hUsr1.data;
          var transactions = hUsr1.data.map(function(h) {
            return (
              <tr>
                <td>{h.ledgerWithCurrencies.ticker}</td>
              </tr>
            )

          })
        }
      }
      console.log(this.props.Users.userticketsReducer);
      return (
        <div className="row">

          <div className="col-md-12 mb-3">
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({
                  active: this.state.activeTab === '1'
                })} onClick={() => {
                  this.toggleTab('1');
                }}>
                  Account Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({
                  active: this.state.activeTab === '2'
                })} onClick={() => {
                  this.toggleTab('2');
                }}>
                  Holdings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({
                  active: this.state.activeTab === '3'
                })} onClick={() => {
                  this.toggleTab('3');
                }}>
                  Transaction History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({
                  active: this.state.activeTab === '4'
                })} onClick={() => {
                  this.toggleTab('4');
                }}>
                  User Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({
                  active: this.state.activeTab === '5'
                })} onClick={() => {
                  this.toggleTab('5');
                }}>
                  Support Tickets
                </NavLink>
              </NavItem>

            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="row">
                  <div className="col-md-12">
                    {form}
                  </div>
                </div>

              </TabPane>
              <TabPane tabId="2">
                <div className="card">
                  <div className="card-header">
                    Holdings Detail
                  </div>
                  <div className="card-block">
                    <table className="table table-bordered table-striped table-sm">
                      <thead>
                        <tr>
                          <th>currency type</th>
                          <th>balance</th>
                          <th>available</th>

                        </tr>
                      </thead>
                      <tbody>
                        {holdings}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="card">
                  <div className="card-header">
                    Transaction Detail
                  </div>
                  <div className="card-block">
                    <table className="table table-bordered table-striped table-sm">
                      <thead>
                        <tr>
                          <th>currency type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="4">

                <div className="card">
                  <div className="card-header">
                    <strong>Account</strong>
                    <small>Settings</small>
                  </div>
                  <div className="card-block">

                    <div className="form-group">
                      <label htmlFor="transfer_max">E-Transfer Max</label>
                      <input type="text" className="form-control" id="transfer_max" placeholder="Enter your company name"/>
                    </div>
                  </div>
                </div>

              </TabPane>
              <TabPane tabId="5">
              <div className="card">
              <div className="card-block">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
  <th>Ticket ID</th>
  <th>subject</th>
  <th>date</th>
  <th>status</th>
  <th>category</th>
  
</tr>
                </thead>
                <tbody>
                </tbody>
                {tickets}
                </table>
                </div>
                </div>

              </TabPane>
            </TabContent>
          </div>
        </div>

      )
    }
    return (
      <div></div>
    );

  }
}
function mapDispatchToProps(dispatch) {
  return {
    getUserUpdate: (params) => {
      dispatch(douserUpdateReq(params));
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
    }
  }
function mapStateToProps(state) {
  const Users = state;
   return {Users};
}

export default connect(mapStateToProps, mapDispatchToProps)(Userdetails);
