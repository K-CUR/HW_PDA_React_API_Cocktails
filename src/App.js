import './App.css';
import CocktailContainer from './containers/CocktailContainer'

function App() {

      // the URL options (available in drop down)
      const cocktailTypes = [
        {type: "margaritas", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"},
        {type: "martinis", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"},         
        {type: "stingers", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=stinger"}
    ]

  

  return (
    <>
    <h1>KC's Cocktails</h1>
    <CocktailContainer cocktailTypes={cocktailTypes}/>
    </>
  );
}

export default App;
