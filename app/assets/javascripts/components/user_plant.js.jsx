var UserPlant = React.createClass({

  render: function () {
    var plant = this.props.plant;
    return (
      <tr>
        <td>{plant.name}</td>
        <td>{plant.description}</td>
        <td><button className="btn" onClick={this.handleClick}>Remove</button></td>
      </tr>
    );
  },
  findPlotPlantID: function (plotPlants) {
    for (var i = 0; i < plotPlants.length; i++) {
      if (plotPlants[i].plant_id === this.props.plant.id) {
        return plotPlants[i].id;
      }
    };
  },
  handleClick: function () {
    var self = this;
    self.props.removePlant(self.props.plant);
    $.ajax({
            url: "/plot_plants/",
            type: "POST",
            data: { _method: "delete",
                    id: self.findPlotPlantID(self.props.plotPlants)
                  }
    });
  }
});
