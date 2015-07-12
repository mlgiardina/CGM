var UserProfile = React.createClass({
  getInitialState: function () {
    return {first_name: this.props.user.first_name, last_name: this.props.user.last_name, email: this.props.user.email};
  },

  render: function () {
    var first_name = this.props.user.first_name;
    var last_name = this.props.user.last_name;
    var email = this.props.user.email;
    return (
        <form action={"/users/"+this.props.user.id} method="PUT">
          <label>First Name: </label><FirstName first_name={first_name} />
          <label>Last Name: </label><LastName last_name={last_name} />
          <label>Email: </label><Email email={email} />
          <button type="submit">Update Profile</button>
        </form>
    );
  }
});

var FirstName = React.createClass({
  getInitialState: function () {
    return {first_name: this.props.first_name};
  },

  handleChange: function(event) {
    this.setState({first_name: event.target.value});
  },

  render: function () {
    var first_name = this.state.first_name;
    return (
      <input type="text" defaultValue={first_name} onChange={this.handleChange} />
    );
  }
});

var LastName = React.createClass({
  getInitialState: function () {
    return {last_name: this.props.last_name};
  },

  handleChange: function(event) {
    this.setState({last_name: event.target.value});
  },

  render: function () {
    var last_name = this.state.last_name;
    return (
      <input type="text" value={last_name} onChange={this.handleChange} />
    );
  }
});

var Email = React.createClass({
  getInitialState: function () {
    return {email: this.props.email};
  },

  handleChange: function(event) {
    this.setState({email: event.target.value});
  },

  render: function () {
    var email = this.state.email;
    return (
      <input type="text" value={email} onChange={this.handleChange} />
    );
  }
});
