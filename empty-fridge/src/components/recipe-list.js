import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './recipe-list.css';


//function component
function RecipeItem(props) {
    const recipeId = props.id;
    const image = props.image;
    const recipeTitle = props.title;
    const likes = props.likes;
    const missedIngredients = props.missed;

    return (
    <div className="recipe item" key={recipeId}>
        <div className="image-cropper">
            <img src={image}/>
        </div>
        <div className="recipe description"> 
            <h2>{recipeTitle}</h2>
            <div className="likes">
                <FaHeart/>
                <p>{likes}</p>
            </div>
        </div>
        <button id="open-recipe" onClick={props.buttonClick}>View recipe</button>
    </div>
    )
}

export default RecipeItem;