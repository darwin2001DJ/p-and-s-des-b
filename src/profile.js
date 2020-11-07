import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const {
      title,
      profileicon,
      name,
      email,
      mobilenumber,
      age,
      address,
    } = this.props;
    return (
      <>
        <div className="container">
          <h1>TechCrunch</h1>
          <div id="profile-info">
            <h2>{title}</h2>
            <img src={profileicon} id="profile-icon" />
            <div id="profile-details">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Name : </td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Email : </td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Mobile : </td>
                    <td>{mobilenumber}</td>
                  </tr>
                  <tr>
                    <td>Age : </td>
                    <td>{age}</td>
                  </tr>
                  <tr>
                    <td>Address : </td>
                    <td>{address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
