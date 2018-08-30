import React, { Component } from "react";

class HomePage extends Component {
  state = {
    userId: ''
  };
  updateUserId = event => {
    this.setState({
      userId: event.target.value
    });
  };
  login = () => {
      this.props.login(this.state.userId)
  };

  render() {
    return (
      <main role="main" className="container">
        <div>
          <h1>Notification Example</h1>
          <p className="lead">Please enter userId and click Login</p>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="userId"
                    value={this.state.userId}
                    onChange={this.updateUserId}
                    required
                  />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" onClick={this.login}>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
