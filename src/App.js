import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreBoard from "./components/ScoreBoard"; 
import dogs from "./dogbreeds.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dogs, 
    currentScore: 0, 
    highScore: 0 
  };

  resetClick = () => {
    // resets game to start over while the high score remains saved in local space 
    const newdogs = this.state.dogs.map(dog => {
      dog.clicked = false; 
      return dog 
    }); 
    this.setState({
      dogs: newdogs 
    }); 
  }; 

  alreadyClicked = id => {
    console.log("id", id)
    // filter the id of images that already have been clicked from those that have not
    const newdogArray = this.state.dogs.map(dog => {
      if (id === dog.id){
        if(dog.clicked){
          this.setState({
            currentScore: 0, 
          })
          this.resetClick()
        }
        else {
          if(this.state.currentScore >= this.state.highScore){
            this.setState({
              currentScore: this.state.currentScore + 1, 
              highScore: this.state.highScore + 1
            })
          }
          else {
            this.setState({
              currentScore: this.state.currentScore + 1
            })
          }
        }
        if (!dog.clicked){
          dog.clicked = true; 
        }
      }
      return dog; 
    }); 
    console.log(dogs)
    // newest array is stored and compared to even newer array 
    this.setState({ dogs : newdogArray }); 

    const shuffledArray = this.state.dogs.sort(()=>Math.random()-0.5)

    this.setState({
      dogs : shuffledArray
    }); 
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Dog Breed Clicky Game</Title>
        <ScoreBoard>
        Current Score: {this.state.currentScore}
        <br></br>
        High Score: {this.state.highScore}
        </ScoreBoard>
        {this.state.dogs.map(dog => (
          <DogCard
            alreadyClicked={this.alreadyClicked}
            id={dog.id}
            key={dog.id}
            breed={dog.breed}
            image={dog.image}
            temperament={dog.temperament}
            group={dog.group}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
