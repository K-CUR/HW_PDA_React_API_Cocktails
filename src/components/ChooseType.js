import React from "react";

const ChooseType = ({cocktailTypes, handleSelectChange}) => {

    // const cocktailTypes = [
    //     {type: "margaritas", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"},
    //     {type: "martinis", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"},         
    //     {type: "stingers", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=stinger"}
    // ]

    return(
        <div>
            <h3>Select cocktail type</h3>

            <select onChange={handleSelectChange}>
                {cocktailTypes.map(cocktailType => {
                    return <option key={cocktailType.type} value={cocktailType.url}>{cocktailType.type}</option> 
                    })}
            </select>
            
        </div>
    )
}

export default ChooseType;