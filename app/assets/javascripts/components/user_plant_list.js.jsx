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
  listenForAddedPlant: function(addedPlant) {
    var updatedPlantList = this.state.plants;
    updatedPlantList.push(addedPlant);
    this.setState({plants: updatedPlantList});
  },
  render: function () {
    var self = this;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Plant Name</th>
              <th>Description</th>
              <th><button data-target="plant_index" className="add-plant-btn btn modal-trigger">Add Plants</button></th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.plants.map(function(plant) {
              return (
                <UserPlant key={plant.id} plotPlants={self.props.plotPlants} plant={plant} removePlant={self.listenForRemovedPlant} />
              );
            })
          }
          </tbody>
        </table>
        <PlantIndex listenForAddedPlant={this.listenForAddedPlant} allPlants={this.props.allPlants} plot={this.props.plot} />
      </div>
    );
  }
});
