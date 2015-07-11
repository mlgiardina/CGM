var LoggedInNavigation = React.createClass({
  render: function () {
    return (
      <nav>
        <Home url= '/' />
        <MyPlots url= '/????????????' />
        <LogOut url= '/logout' />
      </nav>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <span onClick={window.location.href = this.props.url} className="btn btn-warning">Home</span>
    );
  }
});

var MyPlots = React.createClass({
  render: function () {
    return (
      <span onClick={window.location.href = this.props.url} className="btn btn-primary">My Plots</span>
    );
  }
});

var LogOut = React.createClass({
  render: function () {
    return (
      <span onClick={window.location.href = this.props.url} className="btn btn-primary">Log Out</span>
    )
  }
});
