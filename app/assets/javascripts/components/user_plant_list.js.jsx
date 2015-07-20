var UserPlantList = React.createClass({
  getInitialState: function () {
    return { plants: this.props.plants }
  },
  componentWillMount: function () {
    this.setState({plants: this.state.plants})
  },
  listenForRemovedPlant: function(removedPlant) {
    var updatedPlantList = this.state.plants;
    index = updatedPlantList.indexOf(removedPlant)
    if (index > -1) {
      updatedPlantList.splice(index, 1)
    }
    this.setState({plants: updatedPlantList})
  },
  render: function () {
    var self = this;
    return (
      <table>
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.plants.map(function(plant) {
            return (
              <UserPlant plotPlants={self.props.plotPlants} plant={plant} removePlant={self.listenForRemovedPlant} />
            );
          })
        }
      </tbody>
    </table>
    );
  }
});
