import React, { Component } from 'react';
import './recipes.css';
import { Link } from 'react-router-dom';

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
        };
    }

    //lifecycle method
    //invoked after component is inserted into component tree
    componentDidMount() {
        this.fetchRecipes(this.getRequestURL());
    }

    componentDidUpdate(prevProps) {
        if (this.props.refresh!== prevProps.refresh) {
            this.fetchRecipes(this.getRequestURL());
        }
    }

    getRequestURL() {
        const ingredients = this.props.data;
        let requestURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc&ingredients=";
        const arrayLength = ingredients.length;

        //get rid of duplicates first

        ingredients.forEach(ingredient => {
            if (ingredient.value !== ingredients[arrayLength-1].value) {    
                requestURL += ingredient.value + ",";
            }
            else {
                requestURL += ingredient.value;
            } 
        });

        requestURL += "&number=50";
        return requestURL;
    }

    fetchRecipes(url) {
        fetch(url)
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState ({
                    recipes: data
                })
            });       
    }

    render() { 
        return ( 
        <div className="recipes container">{this.state.recipes.map(recipe => {
            return (
            <div className="recipe" key={recipe.id}>
                <Link to={{ pathname: "/recipe/" + recipe.id, state: recipe.missedIngredients}}>View recipe</Link>
                <img src={recipe.image}/>
                <h2>{recipe.title}</h2>
            </div>
            )})
        }</div>
    );
    }
}
 
export default Recipes;