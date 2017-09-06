import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames'
import {connect} from 'react-redux';
import {doesclateReq} from '../../../redux/actions/esclatetomanagement';
import {doreplyReq} from '../../../redux/actions/mandrillActions';
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('llsvBhncBLu5RbzT4Vy1ig');

class Ticketdetails extends Component {
  constructor(props) {
    super(props);

console.log(this.props);
this.handleChange=this.handleChange.bind(this);
this.reply=this.reply.bind(this);

this.state={ mandrill_reply:" ",mandrill_template:{}}
var self1=this;

debugger;
    };
    componentWillMount() {
var self1=this;

  mandrill_client.templates.list(function(result) {
  
   self1.setState({mandrill_template:result});
   
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Invalid_Key - Invalid API key
});
  }
    reply(){

var template_name=this.state.mandrill_template[0].name, 
date=new Date(),
user=this.props.ticket.result.data[0].withUser.email;
var userName=this.props.ticket.result.data[0].username;

var template_content = [{
        "name": "anyname",
        "content": "example content"
    }];
var message = {
    "subject": "Support reply",
    "from_email": "support@coinsquare.io",
    "from_name": "Coinsquare support",
    "to": [{
            "email": user,
            "name": "Sahil",
            "type": "to"
        }],
    "important": false,
    "track_opens": null,
    "track_clicks": null,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    "merge": true,
    "merge_language": "handlebars",
    "merge_vars": [
    {
        "rcpt": user,
        "vars": [
            {
                "name": "name",
                "content": userName
            },
            {
              "name":"text",
              "content":this.state.mandrill_reply
            }
        ]
    }]
    
};
var async = false;
var ip_pool = "Main Pool";
var send_at = date;
var self1=this;
mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
    console.log(result);
    if (result[0].status==="sent"){
      self1.props.reply(self1.props.ticket.result.data[0].uid,self1.state.mandrill_reply,"Support@coinsquare.io")
     localStorage.setItem("reply","1");
     window.location.reload(false);
    }
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});




    }
    handleChange(e){

      this.setState({[e.target.name]:e.target.value})

    }
    
 
  render() {
   console.log(this.props);
   debugger;
   if (this.state.mandrill_template.length>0){
    var templateOptions = this.state.mandrill_template.map(function(t,index){
return (<option value={t.name}>{t.name}</option>);
    })
   }
    var data={};
    if (this.props.ticket !== undefined){
    if (this.props.ticket.result.data){
      var data=this.props.ticket.result.data[0];
var msg=data.withTicketMessages.map(function(msg,index){
return(<div className="card" key={index}>
                    <div className="card-block">{msg.msg}</div>
                    <div className="card-footer">{msg.from} &nbsp;<small>{msg.created}</small></div>
                  </div>)
})

    }
    }
        return (
          <div className="card">
            <div className="card-header">
              <strong>Ticket</strong>
              <small>History</small>
            </div>
            <div className="card-block">
            {data.key}
            <br />
            {data.tid}
{data.msg}                <br />

                  
                  {msg}
                  
                </div>
                <div className="card-footer">
                <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                              
                            <label>Esclate to Management:</label>
                            
                            <button type="button" className="btn btn-outline-danger active" onClick={()=>{this.props.esclatetoManagement(data.tid,26);  localStorage.setItem("esclated","1"); window.location.reload(false); }}>Esclate to management</button>
                                    
                                </div>
                            </div>
                        </div>
                  <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                              <label>Select Template </label><select className="form-control">{templateOptions}</select>
                              </div></div></div>
                              <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
<label>Reply:</label>
                                    <input type="text" id="input_mandrill" name="mandrill_reply" className="form-control" placeholder="Enter message" onChange={this.handleChange} />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-primary" value={this.state.mandrill_reply} onClick={this.reply}>Send</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
  
            </div>)
            

  }
  }
 function mapDispatchToProps(dispatch) {
  return {
    
    esclatetoManagement:(id,status)=>{
      var obj={};
      obj.id=id;
      obj.status=status;
obj =JSON.stringify(obj);
      dispatch(doesclateReq(obj));
    }, 
    reply:(id,msg,from)=>{
      var obj={};
      obj.tid=id;
      obj.msg=msg;
      obj.from=from;
obj =JSON.stringify(obj);
      dispatch(doreplyReq(obj));
    }
    }
  }
function mapStateToProps(state) {
  const Users = state;
   return {Users};
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticketdetails);
