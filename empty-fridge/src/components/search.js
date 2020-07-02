import React, { Component } from 'react';
import './search.css';
import Recipes from './recipes.js';

class Search extends Component {
    //assigns initial state
    constructor(props) {
        super(props);

        this.state = { 
            //properties of state object
            inputValue: "",
            ingredients: [],
            recipesVisible: false,
            refreshRecipes: false
        };
    }

    updateInput(key, value) {
        this.setState( {
            //square brackets used to refer to object property
            [key]: value
        });
    }

    deleteIngredient(id) {
        let ingredients = [...this.state.ingredients];
        
        ingredients = ingredients.filter(ingredient => ingredient.id !== id);

        this.setState({
            ingredients
        });
    }

    addIngredient() {
        const newIngredient = {
            id: 1 + Math.random(),
            value: this.state.inputValue.slice()
        }
        //copy array
        let ingredients = [...this.state.ingredients];

        //add ingredient to existing array
        ingredients.push(newIngredient);

        //reset state
        this.setState ({
            ingredients,
            inputValue: ""
        });
    }

    search() {
        //triggers rendering based on click of search button
        if (this.state.recipesVisible) {
            this.setState ({
                refreshRecipes: !this.state.refreshRecipes
            })
        }
        else {
            this.setState ({
                recipesVisible: true
            });
        }
    }

    //provide event listeners when DOM is rendered
    //return stops execution and returns value from function

    render() { 
        return ( 
            <div>
                <input className="input-field"
                    type="text"
                    placeholder="Add an ingredient"
                    //curly brackets required to dynamically set attribute
                    value = {this.state.inputValue}
                    onChange = {event => this.updateInput("inputValue", event.target.value)}
                />
                <button id="add-button" onClick={()=> this.addIngredient()}>+</button>
                <ul className="ingredient list">
                    {this.state.ingredients.map(ingredient => {
                        return (
                        <li key={ingredient.id}>{ingredient.value}
                            <button id="delete-button" onClick={() => this.deleteIngredient(ingredient.id)}>x</button>
                        </li>
                        );
                    })}
                </ul>
                <button id="search-button" onClick={() => this.search()}>Find recipes</button>
                <div className="recipes">{this.state.recipesVisible ? <Recipes data = {this.state.ingredients} 
                refresh = {this.state.refreshRecipes}/> : null}</div>
            </div>
        );
    }
}
 
export default Search;