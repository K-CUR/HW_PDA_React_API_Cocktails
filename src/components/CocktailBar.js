import React from "react";
import Cocktail from "./Cocktail";

const CocktailBar = ({cocktails, onCocktailClick}) => {

    
    const cocktailItems = cocktails.map((cocktail) => {
        return <Cocktail cocktail={cocktail} key={cocktail.idDrink} onCocktailClick={onCocktailClick}/>
    })


    return(
        <div>
            <h1>Menu</h1>
            <ul>
                {cocktailItems}
            </ul>
        </div>

)

} 

export default CocktailBar;
