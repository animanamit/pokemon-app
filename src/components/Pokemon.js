import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon-image">
        <img alt="pokemon" src={pokemon.image} />
      </div>
    </div>
  );
};

export default Pokemon;
