import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './recipe-list.css';

//list component
function RecipeItem(props) {
    const image = props.image;
    const recipeTitle = props.title;
    const likes = props.likes;

    return (
    <div className="recipe item">
        <div className="image-cropper">
            <img src={image} alt="jpg"/>
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