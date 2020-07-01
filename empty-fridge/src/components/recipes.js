import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            url: ""
        };
    }

    //lifecycle method
    //invoked after component is inserted into component tree
    componentDidMount() {
        console.log("worked");
        this.getRequestURL();
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
        
        this.setState ({
            url: requestURL
        });
    }

    render() { 
        return ( 
        <div>{this.state.url}</div>
         );
    }
}
 
export default Recipes;