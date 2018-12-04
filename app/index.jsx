import React from "react";
import ReactDOM from "react-dom";
import createReactClass from 'create-react-class'

var App = createReactClass({
  getInitialState: function(){
    return {
      profiles: [
        {name: "Makoto",
         age: 27},

        {name: "Malu",
        age:28}
      ]
    }
  },
  render: function(){
    return(
      <section>
        <section>
          <h1>Profile 1</h1>
          <p>{this.state.profiles[0].name}</p>
          <p>{this.state.profiles[0].age}</p>
        </section>
        <section>
          <h1>Profile 2</h1>
          <p>{this.state.profiles[1].name}</p>
          <p>{this.state.profiles[1].age}</p>
        </section>
      </section>      
    )
  }
})
ReactDOM.render(<App />, document.getElementById("app"));

