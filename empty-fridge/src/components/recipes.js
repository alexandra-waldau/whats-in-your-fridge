import React, { Component } from 'react';
import './recipes.css';
import  RecipeItem from './recipe-list';
import Recipe from './recipe';

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            showRecipeDetail: false,
            showRecipeID: '',
            missedIngredients: []
        };
    }

    //lifecycle method
    //invoked after component is inserted into component tree
    componentDidMount() {
        this.fetchRecipes(this.props.url);
    }

    componentDidUpdate(prevProps) {
        if (this.props.refresh!== prevProps.refresh) {
            this.fetchRecipes(this.props.url);
        }
    }

    async fetchRecipes(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState ({
                recipes: data
            });
        }
        catch(error) {
            console.log(error);
        }   
    }

    showRecipe(id, ingredients) {
        this.setState ({
            showRecipeDetail: !this.state.showRecipeDetail,
            showRecipeID: id,
            missedIngredients: ingredients
        })
    }

    render() { 
        return ( 
        <div id="recipe-view">
            <div className="recipes-list">{this.state.recipes.map(recipe => {
                return (<RecipeItem id={recipe.id} title={recipe.title}
                    image={recipe.image} likes={recipe.likes} 
                    buttonClick={() => this.showRecipe(recipe.id, recipe.missedIngredients)}/>)
                })}
            </div>
            <div className="recipe-detail">
                {this.state.showRecipeDetail ? <Recipe id={this.state.showRecipeID} 
                missed={this.state.missedIngredients}/> : null}
            </div>
        </div>
    )}
}
 
export default Recipes;