import React, {Component} from 'react';

import './App.css';

class App extends Component {

  async postTicketData(){
  
    let auth = btoa('niilo:salasana');
    let result = await fetch("https://ticketguru.herokuapp.com/api/events/1/tickets", {
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
        
      pcs: '3',
      orderid: '14',
      tickettypeid: '4',

    })


  });

  console.log(result);
}


  async postOrderData(){
  
        let auth = btoa('niilo:salasana');
        let result = await fetch("https://ticketguru.herokuapp.com/api/orders/", {
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
            orderid: '1',
           

        })


      });

      console.log(result);
  }


  render(){
    return(

        <div className="App">

          <button onClick={() => this.postOrderData()}>Post order data</button>

          <button onClick={() => this.postTicketData()}>Post ticket data</button>

        </div>

    )
  }



}

export default App;




/* async postData(){
  
      
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
} */