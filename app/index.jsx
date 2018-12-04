import React from "react";
import ReactDOM from "react-dom";
import createReactClass from 'create-react-class'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>
    })
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.name} age is {this.props.age} and {this.props.bio}</p>
        <h3>Hobbies</h3>
        <ul>
          {hobbies}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        {
          name: "Makoto",
          bio: "A programmer",
          age: 27,
          hobbies: ["play dota", "swimming"]
        },
        {
          name: "Malu",
          bio: "A San marcos Student",
          age: 28,
          hobbies: ["pilastes", "sleeping"]
        }
      ]
    }
  }
  render() {
    let profiles = this.state.profiles.map(profile => {
      return (
        <Profile
          name={profile.name}
          age={profile.age}
          bio={profile.bio} ø
          hobbies={profile.hobbies} />
      )
    })
    return (
      <div>
        {profiles}
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById("app"));

