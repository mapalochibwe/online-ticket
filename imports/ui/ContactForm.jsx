import React from 'react';
import { Meteor } from 'meteor/meteor';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
// samuel
export class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '' ,text: '', text:'' ,email:'' ,number:'' ,message:''};
  
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onChange(state,event){
      let val = {};


     val[state] = event.target.value;
     this.setState(val)
    }

    handleSubmit(event) {
      alert(' thank you for communicating with us.: ' + this.state.value);
      event.preventDefault();
    }
    
    render() {
      return (
        <div>
        <div className="wrapper">
        <div>
        <img src="images/contact_us_vertical-357x1024-1.jpg" alt="contact_us_vertical-357x1024-1.jpg" />
        </div>

        <div className="lines">
        <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
        <div className="One">
        <label>
          
          <input type="text" placeholder="Full name" value={this.state.name} onChange={(event)=>{this.onChange('text',event)}} required/>
          </label> <br/>
          </div>

          <div className="Two">
          <label>
            <input type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.onChange('email',event)}} required/>
          </label><br/>
          </div>

          <div className="Three">
          <label>
            <input type="number" placeholder="Number" value={this.state.number} onChange={(event)=>{this.onChange('number',event)}} required/>
          </label><br/>
          </div>

          <div className="Four">
          <label>
            <textarea className="textAreaPref" type="text" placeholder="Message" value={this.state.message} onChange={(event)=>{this.onChange('message',event)}}></textarea>
          </label><br/>
          </div>
          <input type="submit" value="Submit Message" id="submitbtn"/>
        </form>
        </div>
        </div>
        
        </div>
        <div className="fade_rule"></div>
        </div>
        );
      }
    }
// samuel