var PlantIndex = React.createClass({
  getInitialState: function () {
    return {
      plants: this.props.allPlants,
      filteredPlants: []
    }
  },
  componentWillMount: function () {
    this.setState({filteredPlants: this.state.plants})
  },
  render: function () {
    return (
      <div id="plant_index" className="modal">
        <div className="modal-content">
          <h4>Plants</h4>
          <div className="plant-search">
            <input type='text' id='search-bar' placeholder="Search for plants..." onChange={this.filterList}/>
          </div>
          <Plants plants={this.state.filteredPlants} plot={this.props.plot} listenForAddedPlant={this.props.listenForAddedPlant} />
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
    var self = this;
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
                  <td><AddPlant plant={plant} plot={self.props.plot} listenForAddedPlant={self.props.listenForAddedPlant}/></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    )
  },
});

var AddPlant = React.createClass({
  getInitialState: function () {
    return { added: false };
  },

  render: function () {
    if (this.state.added) {
      return (
        <button className="btn add-plant-btn" type="button" disabled="true">Added!</button>
      );
    } else {
      return (
        <button className="btn add-plant-btn" type="button" onClick={this.handleClick}>Add Plant</button>
      );
    }
  },

  handleClick: function () {
    var self = this;
    self.props.listenForAddedPlant(this.props.plant)
    $.post("/plot_plants/",
          {
            plot_id: this.props.plot.id,
            plant_id: this.props.plant.id
          },
          function (data, status) {
            if (status === "success" ) {
              self.setState({ added: true });
            };
          });
  }
});
