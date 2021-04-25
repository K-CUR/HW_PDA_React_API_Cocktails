import React from "react";

const Cocktail = ({cocktail, onCocktailClick}) => {

const handleClick = () => {
    onCocktailClick(cocktail);
}


return <li onClick={handleClick}>{cocktail.strDrink}</li>
}


export default Cocktail;