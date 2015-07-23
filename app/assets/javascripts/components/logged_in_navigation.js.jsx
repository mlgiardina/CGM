var LoggedInNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <a className="logo" href="/">Community Garden Manager</a>
        <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
        <div className="hide-on-med-and-down">
          <div className='nav-btn'>
            <LogOut url='/logout' />
          </div>
          <div className='nav-btn'>
            <MyPlots url='/plots' />
          </div>
          <div className='nav-btn'>
            <MyAccount url={'/users/' + this.props.user_id} />
          </div>
          <div className='nav-btn'>
              <Home url='/' />
          </div>
        </div>
        <ul className="side-nav" id="mobile-nav">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </nav>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>Home</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var MyAccount = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>My Account</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var MyPlots = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>My Plots</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});

var LogOut = React.createClass({
  render: function () {
    return (
      <span onClick={this.clicked} className='nav-btn'>Log Out</span>
    );
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});
