import React from "react";
import "./OnePet.css";

class OnePet extends React.Component {
  color = () => {
    if (this.props.alive) {
      return "aliveColor";
    } else return "deadColor";
  };

  life = () => {
    if (this.props.alive) {
      return (
        <>
          <p>
            {" "}
            Status: alive!! <br></br>
            <button onClick={() => this.props.handleDeath(this.props.id)}>kill</button>
          </p>
        </>
      );
    } else {
      return (
        <>
          <p>
            {" "}
            Status: dead :( <br></br>
            <button onClick={() => this.props.handleRevival(this.props.id)}>revive</button>
          </p>
        </>
      );
    }
  };

  remove = () => {
    if (!this.props.alive) {
      return (
        <p>
          <b>Danger Zone!</b> <br></br>
          <button onClick={() => this.props.handleRemoval(this.props.id)}>Remove Pet</button>
        </p>
      );
    }
  };

  render() {
    return (
      <>
        <div className={this.color()}>
          <li>
            {this.props.name} is a very cute {this.props.species} of age {this.props.age}
          </li>
          {this.life()}
          {this.remove()}
        </div>
      </>
    );
  }
}

export default OnePet;
