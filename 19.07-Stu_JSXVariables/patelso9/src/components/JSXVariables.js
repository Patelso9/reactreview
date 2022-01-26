import React from "react";

function JSXVariables() {

  const name = "Sonali";
  const thought = "is complicated but has the potential to do so much";

  const noVow = str => {
    const vowels = ["a", "e", "i", "o", "u"]
    let result = ""

    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        result += str[i];
      }
    }
    return result;
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thought}</h2>
          <h2>Name without vowels is: {noVow(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
