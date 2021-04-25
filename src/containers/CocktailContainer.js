import React, {useState, useEffect} from "react";
import CocktailBar from "../components/CocktailBar";
import CocktailDetail from "../components/CocktailDetail";
import ChooseType from "../components/ChooseType";

const CocktailContainer = ({cocktailTypes}) => {
    // state
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);


    // useEffect to prevent constant re-rerender
    // useEffect (() => {
    //     fetchCocktails(cocktailTypes[0].url);
    // },[cocktailTypes])

    useEffect (() => {
        fetchCocktails(cocktailTypes[0].url)
    },[cocktailTypes])

    useEffect(() => {
        onCocktailClick(cocktails[0])
    }, [cocktails])


    // fetch data from API
    const fetchCocktails = url => {
        fetch(url)
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
    const handleSelectChange = (event) => {
        fetchCocktails(event.target.value);
    }

    // onClick for viewing single cocktail
    const onCocktailClick = (cocktail) => {
        setSelectedCocktail(cocktail);
    }


    return(
        <>
        <ChooseType cocktailTypes={cocktailTypes} handleSelectChange={handleSelectChange} />
        {cocktails ? <CocktailBar cocktails={cocktails} onCocktailClick={onCocktailClick} /> :null}
        {selectedCocktail ? <CocktailDetail selectedCocktail={selectedCocktail} /> :null}
        </>
    )
}


export default CocktailContainer;