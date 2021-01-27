import React from "react";
import OnePet from "./OnePet";

class Pets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [
        { id: 1, name: "hobbitz", species: "dragon", age: "3", alive: true },
        { id: 2, name: "fluffy", species: "guinea pig", age: "2", alive: true }
      ]
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

  render() {
    return (
      <>
        {this.state.pets.map(pet => (
          <>
            <OnePet id={pet.id} name={pet.name} species={pet.species} age={pet.age} alive={pet.alive} handleDeath={petId => this.handleDeath(petId)} handleRevival={petId => this.handleRevival(petId)} />
          </>
        ))}
      </>
    );
  }
}

export default Pets;
