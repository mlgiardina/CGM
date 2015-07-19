var UserPlant = React.createClass({
  render: function () {
    var plant = this.props.plant;
    return (
      <tr>
        <td>{plant.name}</td>
        <td>{plant.description}</td>
        <td><span onClick={this.handleClick}>Remove This Plant</span></td>
      </tr>
    );
  },

  handleClick: function () {
    var self = this;
    $.post("/plot_plants/",
          {
            _method: "delete",
            id: self.props.plotPlantID
          }
    );
  }
});
