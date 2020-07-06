import React, { Component } from 'react';
import './search.css';
import Recipes from './recipes-view.js';
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

    //retrieve current input value
    updateInput(key, value) {
        this.setState( {
            [key]: value
        });
    }

    //delete 
    deleteIngredient(id) {
        let ingredients = [...this.state.ingredients];
        
        ingredients = ingredients.filter(ingredient => ingredient.id !== id);

        this.setState({
            ingredients: ingredients
        });
    }

    addIngredient() {
        const newIngredient = {
            id: 1 + Math.random(),
            value: this.state.inputValue.slice()
        }
        //copy array
        let ingredients = [...this.state.ingredients];

        //add ingredient to array
        ingredients.push(newIngredient);

        //reset state
        this.setState ({
            ingredients: ingredients,
            inputValue: ""
        });
    }

    getRequestURL() {
        let requestURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc&ingredients=";
        let noDuplicates = [];

        //get rid of duplicate ingredients
        let nameArray = this.state.ingredients.map(ingredient => {return ingredient.value});
        nameArray.forEach(name => {
            if(!noDuplicates.includes(name)) {
                noDuplicates.push(name);
            }
        })
    
        const arrayLength = noDuplicates.length;

        noDuplicates.forEach(ingredient => {
            //check if ingredient is not the last one in the array
            if (ingredient!== noDuplicates[arrayLength-1]) {    
                requestURL += ingredient + ",+";
            }
            else {
                requestURL += ingredient;
            } 
        });
        requestURL += "&number=50";
        return requestURL;
    }

    search() {
        //trigger rendering of recipes section based on click of search button
        if (this.state.recipesVisible) {
            this.setState ({
                refreshRecipes: !this.state.refreshRecipes,
                searchURL: this.getRequestURL()
            })
        }
        //set recipe section to visible 
        else {
            this.setState ({
                recipesVisible: true,
                searchURL: this.getRequestURL()
            });
        }
    }

    //read from input field
    //continuously render ingredient list
    render() { 
        return ( 
            <div>
                <header>
                    <h1>Cook IT</h1>
                    <div className="input container">
                        <input className="input-field"
                        type="text"
                        placeholder="Add an ingredient"
                        value = {this.state.inputValue}
                        onChange = {event => this.updateInput("inputValue", event.target.value)}
                        />
                        <button id="add-button" onClick={()=> this.addIngredient()}><FaPlus/></button>
                    </div>
                </header>
                <section id="ingredients">
                    <ul className="ingredient list">
                        {this.state.ingredients.map(ingredient => {
                            return (<li key={ingredient.id}>{ingredient.value}
                                    <button id="delete-button" onClick={() => this.deleteIngredient(ingredient.id)}><FaTimes/></button>
                                    </li>
                            );
                        })}
                    <button disabled={this.state.ingredients.length === 0} id="search-button" onClick={() => this.search()}>Find recipes</button>
                    </ul>
                </section>
                <section id="recipes">{this.state.recipesVisible && <Recipes url = {this.state.searchURL} 
                refresh = {this.state.refreshRecipes}/>}
                </section>
            </div>
        );
    }
}
 
export default Search;