import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    //assigns initial state
    constructor(props) {
        super(props);

        this.state = { 
            //properties of state object
            inputValue: "",
            ingredients: []
        };
    }

    updateInput(key, value) {
        this.setState( {
            //square brackets used to refer to object property
            [key]: value
        });
    }

    addIngredient() {
        //remove whitespace
        const input = this.state.inputValue.slice();
        const ingredients = [...this.state.ingredients];

        //add ingredient to existing array
        ingredients.push(input);

        //reset state
        this.setState ({
            ingredients,
            inputValue: ""
        });
    }

    //provide event listeners when DOM is rendered
    //return = display

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
                <button onClick={()=> this.addIngredient()}>+</button>
                <ul>
                    {this.state.ingredients.map(ingredient => {
                        return (
                        <li>{ingredient}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default Search;