import React from "react";
import Margarita from "./Margarita.png";
import Martini from "./Martini.png";
import Stinger from "./Stinger.png";
import './ChooseType.css';

const ChooseType = ({cocktailTypes, handleSelectChange, handleSelect}) => {

    return(
   
        <div>
            
            <h3>Select a cocktail type...</h3>

            <input className="img-cocktail" onClick={handleSelect} key={cocktailTypes[0].type} value={cocktailTypes[0].url} type="image" src={Margarita} alt="" />
            <input className="img-cocktail" onClick={handleSelect} key={cocktailTypes[1].type} value={cocktailTypes[1].url} type="image" src={Martini} alt="" />
            <input className="img-cocktail-long" onClick={handleSelect} key={cocktailTypes[1].type} value={cocktailTypes[2].url} type="image" src={Stinger} alt="" />

            {/* DECIDED AGAINST DROP-DOWN. HAVE CLICKABLE IMAGES INSTEAD (above) */}
            {/* <select onChange={handleSelectChange}>
                {cocktailTypes.map(cocktailType => {
                    return <option key={cocktailType.type} value={cocktailType.url}>{cocktailType.type}</option> 
                    })}
            </select> */}
            
        </div>
    )
}

export default ChooseType;