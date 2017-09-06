import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import Ticketdetails from './ticketdetail/ticketdetail.js'
import { connect } from 'react-redux';
import { dosupportReq } from '../../redux/actions/tickets';
import { doticketReq } from '../../redux/actions/ticketDetail';
import $ from 'jquery';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';


class Supporttickets extends Component {
  constructor(props) {
    super(props);
var d = moment("2017-01-01"); //starting from this year Jan 
var ed = moment(); // till current date 

    this.state={
      username:"",
      category:"",
      status:"",
      pageno:1,
      viewState:1,
      startdate:d,
      enddate: ed
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleInputChange1=this.handleInputChange1.bind(this);
    this.pageLink=this.pageLink.bind(this);
   this.rowClick = this.rowClick.bind(this);

  }
  rowClick(id){
    console.log(id);
    this.props.getTicketdetail(id);
    this.setState({viewState : 2});
  }
  handleInputChange1(date, name ){
/*console.log(date.toString())*/
var formated=date.format('DD/MM/YYYY');
this.setState({[name]:date});
console.log(date.format('DD/MM/YYYY'));
    debugger;

  }
  pageLink(id,event){
event.preventDefault();
if (id === '+1' || id === '-1')
{
  let oldpageState= this.state.pageno;
  if (id === '+1'){
    oldpageState=oldpageState+1;
  }
  else if (id === '-1'){
   oldpageState=oldpageState-1; 
  }
this.setState({pageno:oldpageState},()=>
     this.props.getTickets(JSON.stringify(this.state)))
}
else{
    this.setState({pageno:id.val},()=>{
      this.props.getTickets(JSON.stringify(this.state))
    });
  }
  }
  

  handleSubmit(event){
      event.preventDefault()
      console.log(this.state);
      var newState={...this.state,enddate:this.state.enddate.format('YYYY-MM-DD'),startdate:this.state.startdate.format('YYYY-MM-DD')}
            console.log(newState);
      debugger;
      this.props.getTickets(JSON.stringify(newState));
  }
  handleInputChange(event){
      console.log(this.state);
    const target = event.target;
    const name=target.name;
    debugger;
    let value=target.value;
    this.setState({[name]:value});
  }
  componentWillMount() {

    if (localStorage.getItem("esclated")==="1"){
      alert("Ticket esclated Successfully ");
localStorage.clear();
    }
    else if (localStorage.getItem("reply")==="1"){
  alert("Message sent Successfully ");
localStorage.clear();
}
    this.props.getTickets(JSON.stringify(this.state));
    console.log(this.props);

  }
  componentDidUpdate(prevProps, prevState) {
    
if (this.state.pageno === 1)
    {
      $(".prev").addClass("disabled");

    }
    else if (this.state.pageno > 1 )
    {
      $(".prev").removeClass("disabled");      
    }
  }
  render() {
    if (this.state.viewState === 2){

return(<div><button type="button" className=" btn btn-primary" onClick={()=> window.location.reload(false)  }> Back to Search </button>
  <Ticketdetails ticket={this.props.Users.ticketReducer} /> </div>)
    }
    else{

 if (this.props.Users.supportReducer.result.message){

if (this.props.Users.supportReducer.result.total){
let total=this.props.Users.supportReducer.result.total;
 var pages=Math.round(total/50);
  let page = total % 50 ;
    if (page< 25){
      pages=pages+1
      }
    var pagination=[];
   
for (var i =1;  i <= pages; i++) {
    let val=i;
     var className="page-link";
    if (val===this.state.pageno)
    {
      console.log(val);
      debugger;
     className="page-link active";
    }
    pagination.push((<li className="page-item" key={i}>
                      <a className={className} onClick={(event) => this.pageLink({val},event)} href="#">{i}</a>
                    </li>))
    }
    if (pages===this.state.pageno || pages === 1){
      $(".next").addClass("disabled")
    }
    else{
     $(".next").removeClass("disabled") 
    }
}

if (this.props.Users.supportReducer.result.message === 'No Ticket found'){
var rows=<tr>
          <td colSpan="7">There is no data to display.</td>
          


  </tr>
}
else{
  var rows=this.props.Users.supportReducer.result.data.map(function(a,index){

return(<tr key={index} className="clickable" onClick={() => {
            self1.rowClick(a.tid)
          }}>
          <td >{a.tid}</td>
          <td >{a.withUser.username}</td>
          <td >{a.key}</td>
          <td >{a.created}</td>
          <td >{a.status}</td>
          <td >{a.category}</td>
          <td >{a.withUser.email}</td>


  </tr>)
})

  }
} 
var self1 = this;
    return (
      <div className="animated fadeIn">
         
          <button type="button" className="clear_filter btn btn-primary" onClick={()=> window.location.reload(false)  }>Clear Filter </button>
           <div className="card">
              <div className="card-header">
                <strong>Filter </strong>
              </div>
            <div className="card-block">
           <form className="form-inline wide-33" onSubmit={this.handleSubmit}>
              
  <div className="input-group">
    <label>Search by user name :
    
      <input type="text" id="input3" value={this.state.username} name="username" onChange={this.handleInputChange} className="form-control" placeholder="Search" required />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </span>
       </label>
    </div>
    </form>
<form className="form-inline wide-33" onSubmit={this.handleSubmit}>
    <div className="input-group">
      <label>Filter by Category: 
     <select id="Input" name="category" className="form-control"  onChange={this.handleInputChange} value={this.state.category} >
                        <option value=" ">All</option>
                        <option value="cat1">Catagory 1</option>
                        <option value="cat2">Catagory 2</option>
                        <option value="cat3">category 3</option>
                       </select>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-filter"></i>
            </button>
          </span>
        </label>
      </div>
      </form>
      <form className="form-inline wide-33" onSubmit={this.handleSubmit}>
      <div className="input-group">
        <label>Filter  by Status: 
    <select id="Input" className="form-control"  value={this.state.status} onChange={this.handleInputChange} name="status" >
                        <option value=" ">All</option>
                        <option value="10">Active</option>
                        <option value="20">Pending</option>
                        <option value="30">New</option>
                       </select>
                <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-filter"></i>
              </button>
            </span>
          </label>
        </div>
      </form>
      <br />
      <div className="wide-100 pull-left margin-t10">
      <label> Enter date range </label>
      <DatePicker name="startdate" className="form-control"
        selected={this.state.startdate}
        onChange={(date)=>{this.handleInputChange1(date,"startdate")}}
    />
    <label> to </label>
    <DatePicker name="enddate" className="form-control"
        selected={this.state.enddate}
        onChange={(date)=>{this.handleInputChange1(date,"enddate")}}
    />
<button className="btn btn-primary" onClick={this.handleSubmit}> Apply Filter </button>
            </div>
            </div>
          </div>


          <div className="card">
            <div className="card-header">
            Tickets
            </div>
            <div className="card-block">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
  <th>Ticket ID</th>
  <th>User name</th>
  <th>subject</th>
  <th>date</th>
  <th>status</th>
  <th>category</th>
  <th>email</th>
</tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
              <ul className="pagination">
  <li className="page-item">
    <a className="page-link prev" onClick={(event) => this.pageLink('-1',event)} href="#">Prev</a>
  </li>
  {pagination}
  <li className="page-item">
    <a className="page-link next" onClick={(event) => this.pageLink('+1',event)} href="#">Next</a>
  </li>
</ul>

            </div>
          </div>
          
        </div>

    )
  }
    }
}
function mapStateToProps(state) {
  const Users = state;
  

  return { Users };
}

function mapDispatchToProps(dispatch) {
    return {
    getTickets: (params) => {
      dispatch(dosupportReq(params));
    },getTicketdetail: (id) => {
      dispatch(doticketReq(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Supporttickets);
