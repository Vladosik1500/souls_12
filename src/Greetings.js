import "./styles.css";
import React, { Component } from "react";

const Greetings = ({ firstName, lastName }) => (
  <div>
    Hey you! {firstName} {lastName}!
  </div>
);
class SimpleForm extends React.Component {
  state = {
    firtsName: ""
  };
  onFirstNameChange = (event) =>
    this.setState({
      firtsName: event.target.value
    });
  render() {
    return (
      <div>
        <input type="text" name="firtsName" onChange={this.onFirstNameChange} />

        <Greetings firtsName={this.state.firtsName} />
      </div>
    );
  }
}

const App = () => (
  <div>
    <SimpleForm />
  </div>
);
export default App;
