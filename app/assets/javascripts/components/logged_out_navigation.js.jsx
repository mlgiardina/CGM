var LoggedOutNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <a className="logo" href="/">Community Garden Manager</a>
        <div className="nav-btn">
          <SignUp url='/users/new'/>
        </div>
        <div className='nav-btn'>
          <LogIn url='/login'/>
        </div>
      </nav>
    );
  }
});

var SignUp = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>Sign Up</span>
    );
  },
  clicked: function () {
    window.location.href = this.props.url;
  }
});

var LogIn = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>Log In</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});
