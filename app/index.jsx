import React from "react";
import ReactDOM from "react-dom";
import createReactClass from 'create-react-class'

var X = createReactClass({
  render: function(){
    return(<p> X Comp</p>)
  }
})

var App = createReactClass({
  render: function(){
    return(
      <div>
        <p>Hello Worldsss </p>
        <X/>
      </div>        
    )
  }
})
ReactDOM.render(<App />, document.getElementById("app"));