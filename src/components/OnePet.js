import React from "react";

class OnePet extends React.Component {
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
  render() {
    return (
      <>
        <li>
          {this.props.name} is a very cute {this.props.species} of age {this.props.age}
        </li>
        {this.life()}
      </>
    );
  }
}

export default OnePet;
