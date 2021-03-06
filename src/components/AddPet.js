import React from "react";

class AddPet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: "",
      petSpecies: "",
      petAge: ""
    };
  }

  handleAddTitle = e => {
    let petClone = { ...this.state };
    petClone.petName = e.target.value;
    this.setState(petClone);
  };

  handleAddSpecies = e => {
    let petClone = { ...this.state };
    petClone.petSpecies = e.target.value;
    this.setState(petClone);
  };

  handleAddAge = e => {
    let petClone = { ...this.state };
    petClone.petAge = e.target.value;
    this.setState(petClone);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddPet(this.state.petName, this.state.petSpecies, this.state.petAge);
    let petClone = { ...this.state };
    petClone.petName = "";
    petClone.petSpecies = "";
    petClone.petAge = "";
    this.setState(petClone);
  };

  render() {
    return (
      <>
        <h2>Add Pets</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Pet Name</label>
          <input value={this.state.petName} type="text" onChange={this.handleAddTitle} />

          <label>Enter Pet Species</label>
          <input value={this.state.petSpecies} type="text" onChange={this.handleAddSpecies} />

          <label>Enter Pet Age</label>
          <input value={this.state.petAge} type="text" onChange={this.handleAddAge} />

          <input type="submit"></input>
        </form>
      </>
    );
  }
}

export default AddPet;
