import React from "react";

const CocktailDetail = ({selectedCocktail}) => {


return(
        <>
        <h2>The {selectedCocktail.strDrink}</h2>
        <img src={selectedCocktail.strDrinkThumb} alt={selectedCocktail.strDrink}/>
        
        <div id="grid-container">
        <div>
            <table className="how-to left ingredients-down">
                <tr>
                <th className="table-padding">Ingredients</th>
                <th className="table-padding">Measure</th>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient1} </td>
                <td>{selectedCocktail.strMeasure1} </td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient2}</td>
                <td>{selectedCocktail.strMeasure2}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient3}</td>
                <td>{selectedCocktail.strMeasure3}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient4}</td>
                <td>{selectedCocktail.strMeasure4}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient5}</td>
                <td>{selectedCocktail.strMeasure5}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient6}</td>
                <td>{selectedCocktail.strMeasure6}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient7}</td>
                <td>{selectedCocktail.strMeasure7}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient8}</td>
                <td>{selectedCocktail.strMeasure8}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient9}</td>
                <td>{selectedCocktail.strMeasure9}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient10}</td>
                <td>{selectedCocktail.strMeasure10}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient11}</td>
                <td>{selectedCocktail.strMeasure11}</td>
                </tr>
                <tr>
                <td>{selectedCocktail.strIngredient12}</td>
                <td>{selectedCocktail.strMeasure12}</td>
                </tr>
            </table>
        </div>
        <div>
            <h3>Recipe</h3>
            <p  className="how-to left">{selectedCocktail.strInstructions}</p>
        </div>
    </div>
    </>
)

}

export default CocktailDetail;