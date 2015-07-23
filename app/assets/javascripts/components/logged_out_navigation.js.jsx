var LoggedOutNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <a className="logo brand-logo" href="/">Community Garden Manager</a>
        <a href="#" data-activates="mobile-nav" className="button-collapse"><img className="hamburger" src='http://i.imgur.com/kLFoF6g.png'/></a>
        <div className="hide-on-med-and-down">
          <div className="nav-btn">
            <SignUp url='/users/new'/>
          </div>
          <div className='nav-btn'>
            <LogIn url='/login'/>
          </div>
        </div>
        <ul className='side-nav' id='mobile-nav'>
          <li><a href='/users/new'>Sign Up</a></li>
          <li><a href='/login'>Log In</a></li>
        </ul>
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
