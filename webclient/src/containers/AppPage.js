import React, { Component } from "react";
import socketioClient from "socket.io-client";

import { server } from "../config";

class AppPage extends Component {
  state = {
    notifications: []
  };

  socket;

  componentDidMount() {
    this.socket = socketioClient(server, {
      query: { userId: this.props.userId, appType: 1 }
    });
    this.socket.on('notify', (payload) => {
        let notifications = [...this.state.notifications];
        notifications.push(payload);
        this.setState({
            notifications
        })
    })
  }
  componentWillUnmount() {
    this.socket.emit("disconnect");
  }

  renderNotifications = () => {
    return this.state.notifications.map((notification,index) => {
      return <li className="list-group-item" key={index}>{notification.event}</li>;
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            App Page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>

        <main role="main" className="container">
          <div className="starter-template">
            <h1>Your userId is {this.props.userId}</h1>
            <ul className="list-group" >
            {this.renderNotifications()}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default AppPage;
