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
  };

  render() {
    return (
      <>
        <h2>Add Pets</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Pet Name</label>
          <input type="text" onChange={this.handleAddTitle} />

          <label>Enter Pet Species</label>
          <input type="text" onChange={this.handleAddSpecies} />

          <label>Enter Pet Age</label>
          <input type="text" onChange={this.handleAddAge} />
        </form>
      </>
    );
  }
}

export default AddPet;
