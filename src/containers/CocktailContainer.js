import React, {useState, useEffect} from "react";
import CocktailBar from "../components/CocktailBar";
import CocktailDetail from "../components/CocktailDetail";
import ChooseType from "../components/ChooseType";

const CocktailContainer = ({cocktailTypes}) => {
    // state
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);

    // useEffects
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
        .then(data => setCocktails(data.drinks))

    }

    // handleSelectChange for drop down in ChooseType.
    // Decided against and went for clickable images instead
    // const handleSelectChange = (event) => {
    //     fetchCocktails(event.target.value);
    // }

    // handleSelect for clickable images in ChooseType
    const handleSelect = (event) => {
        fetchCocktails(event.target.value);
    }

    // onClick for viewing cocktail from menu and see receipe etc
    const onCocktailClick = (cocktail) => {
        setSelectedCocktail(cocktail);
    }


    return(
        <>
        <ChooseType cocktailTypes={cocktailTypes}  handleSelect={handleSelect} />
        <CocktailBar cocktails={cocktails} onCocktailClick={onCocktailClick} />
        {selectedCocktail ? <CocktailDetail selectedCocktail={selectedCocktail} /> :null}
        </>
    )
}


export default CocktailContainer;