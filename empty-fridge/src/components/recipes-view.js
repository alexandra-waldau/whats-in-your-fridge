import React, { Component } from 'react';
import './recipes-view.css';
import  RecipeItem from './recipe-list';
import Recipe from './recipe';

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            showRecipeDetail: false,
            showRecipeID: '',
            missedIngredients: [],
        };
    }

    //lifecycle method, invoked after component is inserted into component tree
    componentDidMount() {
        this.fetchRecipes(this.props.url);
    }

    //refresh recipe list if necessary
    componentDidUpdate(prevProps) {
        if (this.props.refresh!== prevProps.refresh) {
            this.fetchRecipes(this.props.url);
        }
    }

    //fetch recipes from request url 
    async fetchRecipes(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            //immediately set counter
            this.setState ({
                recipes: data,
                counter: data.length
            });
        }
        catch(error) {
            console.log(error);
        }   
    }

    //trigger recipe detail and pass missed ingredients
    showRecipe(id, ingredients) {
        this.setState ({
            showRecipeDetail: !this.state.showRecipeDetail,
            showRecipeID: id,
            missedIngredients: ingredients
        })
    }

    //set showRecipeID to false to hide recipe detail component 
    errorMessage() {
        this.setState({
            showRecipeID: null
        })
    }

    //show recipe list or display error message if counter is zero
    //send props to recipe item component to display a recipe in the list
    //if necessary, notify component that recipe detail component should be displayed 
    render() { 
        return ( 
        <div id="wrapper">
        <Counter count={this.state.counter}/>
        <div id="recipe-view">
            {(this.state.counter !== 0) ?
            <div className="recipes-list">{this.state.recipes.map(recipe => {
                return (<RecipeItem key={recipe.id} title={recipe.title}
                    image={recipe.image} likes={recipe.likes} 
                    buttonClick={() => this.showRecipe(recipe.id, recipe.missedIngredients)}/>)
                })}
            </div> : <div id="no-results">{() => this.errorMessage()}Sorry, no results have been found.</div>}
            <div className="recipe-detail">
                {this.state.showRecipeID && <Recipe id={this.state.showRecipeID} 
                missed={this.state.missedIngredients} refresh={this.state.showRecipeDetail}/>}
            </div>
        </div>
        </div>
    )}
}

//counter component
function Counter(props) {
    return (
    <p id="counter">{props.count} results</p>
    );
}

export { Counter };
export default Recipes;