var PlantIndex = React.createClass({
  getInitialState: function () {
    return {
      plants: this.props.plants,
      filteredPlants: []
    }
  },
  componentWillMount: function () {
    this.setState({filteredPlants: this.state.plants})
  },
  render: function () {
    return (
      <div id="plant_index" className="modal bottom-sheet">
        <div className="modal-content">
          <div className="plant-search">
            <input type='text' id='search-bar' placeholder="Plant" onChange={this.filterList}/>
          </div>
          <h4>Plants</h4>
          <Plants plants={this.state.filteredPlants} />
          </div>
      </div>
    );
  },

  filterList: function (event) {
    var updatedPlantList = this.state.plants;
    updatedPlantList = updatedPlantList.filter(function(plant) {
      return plant.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredPlants: updatedPlantList})

  }
});

var Plants = React.createClass({
  render: function () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id="plantList">
          {
            this.props.plants.map(function(plant) {
              return (
                <tr>
                  <td>{plant.name}</td>
                  <td>{plant.description}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
})
