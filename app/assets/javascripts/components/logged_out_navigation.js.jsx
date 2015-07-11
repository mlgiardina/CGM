var LoggedOutNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <Home url='/'/>
        <SignUp url='/users/new'/>
        <LogIn url='/login'/>
      </nav>
    );
  }
});

var SignUp = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>Sign Up</span>
    );
  },
  clicked: function () {
    window.location.href = this.props.url;
  }
});

var LogIn = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>Log In</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});
