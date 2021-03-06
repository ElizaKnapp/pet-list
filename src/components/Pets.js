import React from "react";
import OnePet from "./OnePet";
import AddPet from "./AddPet";

class Pets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  handleDeath = petId => {
    let pets = [...this.state.pets];
    pets.map(pet => {
      if (pet.id === petId) {
        pet.alive = false;
      }
    });

    this.setState({
      pets: pets
    });
  };

  handleRevival = petId => {
    let pets = [...this.state.pets];
    pets.map(pet => {
      if (pet.id === petId) {
        pet.alive = true;
      }
    });

    this.setState({
      pets: pets
    });
  };

  handleRemoval = petId => {
    let pets = [...this.state.pets];
    pets = pets.filter(pet => pet.id !== petId);

    this.setState({
      pets: pets
    });
  };

  handleAddition = (petName, petSpecies, petAge) => {
    if (petName === "" || petSpecies === "" || petAge === "") {
      return alert("YOU NEED TO FILL IN ALL THE BLANKS");
    }

    let addList = [...this.state.pets];

    let newPet = {
      name: petName,
      species: petSpecies,
      age: petAge,
      alive: true
    };

    if (addList.length > 0) {
      newPet["id"] = addList[addList.length - 1].id + 1;
    } else {
      newPet["id"] = 1;
    }

    addList.push(newPet);

    this.setState({
      pets: addList
    });
  };

  render() {
    return (
      <>
        {this.state.pets.map(pet => (
          <>
            <OnePet id={pet.id} name={pet.name} species={pet.species} age={pet.age} alive={pet.alive} handleDeath={petId => this.handleDeath(petId)} handleRevival={petId => this.handleRevival(petId)} handleRemoval={petId => this.handleRemoval(petId)} />
          </>
        ))}
        <AddPet onAddPet={(petName, petSpecies, petAge) => this.handleAddition(petName, petSpecies, petAge)} />
      </>
    );
  }
}

export default Pets;
