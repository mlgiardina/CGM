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
      <a href={this.props.url}>
        <div className='individual-plot'>
          <p className='plot-number'>Plot {this.props.plot_number}</p>
          <p className='plot-owner'>{this.props.owner}</p>
          <ul className='plants'>{plantList}</ul>
          <img src={this.props.image} />
        </div>
      </a>
    );
  },

});
