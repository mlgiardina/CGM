var LoggedInNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <Home url='/' />
        <MyAccount url={'/users/' + this.props.user_id} />
        <MyPlots url='/plots' />
        <LogOut url='/logout' />
      </nav>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>Home</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var MyAccount = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>My Account</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var MyPlots = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>My Plots</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var LogOut = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='btn btn-default'>Log Out</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});
