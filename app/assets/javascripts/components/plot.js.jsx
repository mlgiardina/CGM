var Plot = React.createClass({
  render: function () {
    var plantList = this.props.plants.map(function(plant) {
      return (
        <li>{plant.name}
          <ul>
            <li>{plant.description}</li>
          </ul>
        </li>
      );
    });

    return (
      <div className='individual-plot' onMouseOver={this.handleHover}>
        <p className='plot-number'>Plot {this.props.plot_number}</p>
        <p className='plot-owner'>{this.props.owner}</p>
        <ul className='plants'>
          {plantList}
        </ul>
      </div>
    );
  },

  handleHover: function () {
    $(this).find("img").animate({top:"-150px"}, 400);
  }
});
