import "./App.css";
import Profile from "./profile";
import Profileicon from "./image/profileicon.png";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "My Profile",
      profileicon: Profileicon,
      name: "William",
      email: "william@gmail.com",
      mobilenumber: "8976541234",
      age: 27,
      address: "Great Street,London",
    };
  }

  render() {
    return (
      <>
        <Profile
          title={this.state.title}
          profileicon={this.state.profileicon}
          name={this.state.name}
          email={this.state.email}
          mobilenumber={this.state.mobilenumber}
          age={this.state.age}
          address={this.state.address}
        />
      </>
    );
  }
}
