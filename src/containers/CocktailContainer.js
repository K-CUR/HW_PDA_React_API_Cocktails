import React, {useState, useEffect} from "react";
import CocktailBar from "../components/CocktailBar";
import CocktailDetail from "../components/CocktailDetail";
import Toggle from "../components/Toggle";

const CocktailContainer = () => {
    // state
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);


    // the URL options (available to toggle)
    // const cocktailTypes = [
    //     {type: "margaritas", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"},
    //     {type: "martinis", url:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"},          
    // ]
    

    // useEffect to prevent constant re-rerender
    // useEffect (() => {
    //     fetchCocktails(cocktailTypes[0].url);
    // },[cocktailTypes])

    useEffect (() => {
        fetchCocktails();
    },[])


    // fetch data from API
    const fetchCocktails = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        // .then(data => [data])
        .then(data => setCocktails(data.drinks))
        // .then(data => setCocktails(data))
        // .then(data => console.log(data))
    }

    // const loadSongs = url => {
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(songsList => setSongs(songsList.feed.entry))
    //       .catch(err => console.error);


    // handleSelectChange for toggle 
    // const handleSelectChange = event => {
    //     fetchCocktails(event.target.value);
    // }

    // onClick for viewing single cocktail
    const onCocktailClick = (cocktail) => {
        setSelectedCocktail(cocktail);
    }


    return(
        <>
        {/* <Toggle handleSelectChange={handleSelectChange} cocktailTypes={cocktailTypes} /> */}
        {cocktails ? <CocktailBar cocktails={cocktails} onCocktailClick={onCocktailClick} /> :null}
        {selectedCocktail ? <CocktailDetail selectedCocktail={selectedCocktail} /> :null}
        </>
    )
}


export default CocktailContainer;