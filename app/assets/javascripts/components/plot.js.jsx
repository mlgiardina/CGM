var Plot = React.createClass({
  render: function () {
    var plantList = this.props.plants.map(function(plant) {
      return (
        <li>{plant.name}</li>
      );
    });

    return (
      <div className='individual-plot'>
        <a href={this.props.url}>
          <div>
            <p className='plot-number'>Plot {this.props.plot_number}</p>
            <p className='plot-owner'>{this.props.owner}</p>
            <p className='plants'>{plantList}</p>
            <img src={this.props.image} />
          </div>
        </a>
      </div>
    );
  },

});
