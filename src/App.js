import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async postData(){
  
        let auth = btoa('niilo:salasana');
        let result = await fetch("https://ticketguru.herokuapp.com/api/tickets/", {
        method : 'post',
        mode: 'cors',
        cache : 'no-cache',
        credentials : 'same-origin',
        headers : {
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Basic ' + auth,
        },
        body : JSON.stringify({
            eventid: '1',
            tickettypeid: '6',
            isvalid: 'true',

        })


      });

      console.log(result);
  }


  render(){
    return(

        <div className="App">

          <button onClick={() => this.postData()}>Post ticket order data</button>

        </div>

    )
  }



}

export default App;