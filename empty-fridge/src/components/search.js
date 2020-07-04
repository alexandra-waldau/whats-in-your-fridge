import React, { Component } from 'react';
import './search.css';
import Recipes from './recipes.js';
import { FaPlus, FaTimes } from 'react-icons/fa';

class Search extends Component {
    //assigns initial state
    constructor(props) {
        super(props);

        this.state = { 
            //properties of state object
            inputValue: "",
            ingredients: [],
            recipesVisible: false,
            refreshRecipes: false,
            searchURL: ""
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

    getRequestURL() {
        let requestURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc&ingredients=";
        const arrayLength = this.state.ingredients.length;

        //to do: get rid of duplicates

        this.state.ingredients.forEach(ingredient => {
            if (ingredient.value !== this.state.ingredients[arrayLength-1].value) {    
                requestURL += ingredient.value + ",";
            }
            else {
                requestURL += ingredient.value;
            } 
        });

        requestURL += "&number=50";
        return requestURL;
    }

    search() {
        //triggers rendering based on click of search button
        if (this.state.recipesVisible) {
            this.setState ({
                refreshRecipes: !this.state.refreshRecipes,
                searchURL: this.getRequestURL()
            })
        }
        else {
            this.setState ({
                recipesVisible: true,
                searchURL: this.getRequestURL()
            });
        }
    }

    //provide event listeners when DOM is rendered
    //return stops execution and returns value from function

    render() { 
        return ( 
            <div>
                <header>
                    <h1>Cook IT</h1>
                    <div className="input container">
                        <input className="input-field"
                        type="text"
                        placeholder="Add an ingredient"
                        //curly brackets required to dynamically set attribute
                        value = {this.state.inputValue}
                        onChange = {event => this.updateInput("inputValue", event.target.value)}
                        />
                        <button id="add-button" onClick={()=> this.addIngredient()}>{<FaPlus/>}</button>
                    </div>
                </header>
                <ul className="ingredient list">
                    {this.state.ingredients.map(ingredient => {
                        return (
                        <li key={ingredient.id}>{ingredient.value}
                            <button id="delete-button" onClick={() => this.deleteIngredient(ingredient.id)}>{<FaTimes/>}</button>
                        </li>
                        );
                    })}
                <button id="search-button" onClick={() => this.search()}>Find recipes</button>
                </ul>
                <section id="recipes">{this.state.recipesVisible ? <Recipes url = {this.state.searchURL} 
                refresh = {this.state.refreshRecipes}/> : null}
                </section>
            </div>
        );
    }
}
 
export default Search;