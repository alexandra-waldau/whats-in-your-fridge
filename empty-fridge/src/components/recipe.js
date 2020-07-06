import React, { Component } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './recipe.css';

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            missedIngredients: [],
            allIngredients: [],
            information: [],
            steps: []
        };
    }

    componentDidMount() {
        this.fetchRecipe(this.props.id.toString());
        this.getMissedIngredients(this.props.missed);
    }

    componentDidUpdate(prevProps) {
        if (this.props.refresh!== prevProps.refresh) {
            this.fetchRecipe(this.props.id);
            this.getMissedIngredients(this.props.missed);
        }
    }

    //fetch recipe information and instructions
    async fetchRecipe(id) {
        let requestInfoURL = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc");
        let requestStepsURL = "https://api.spoonacular.com/recipes/".concat(id, "/analyzedInstructions?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc");

        try {
            const [info, steps] = await Promise.all([fetch(requestInfoURL), fetch(requestStepsURL)]);
            const infoResult = await info.json();
            const stepsResult = await steps.json();
            this.setState ({
                information: infoResult,
                steps: stepsResult,
                allIngredients: infoResult.extendedIngredients
            });
        }
        catch(error) {
            console.log(error);
        }   
    }

    //store ingredient names for later comparison
    getMissedIngredients(ingredients) {
        let missed = [];

        ingredients.forEach(ingredient => {
            missed.push(ingredient.name)
        });

        this.setState ({
            missedIngredients: missed
        })
    }

    //render recipe information and, if available, instructions
    render() { 
    return ( 
            <div className="recipe detail">
                    <div className="img-cropper">
                        <img src={this.state.information.image} alt="jpg"/>
                    </div>
                    <div className="recipe-information">
                    <h2>{this.state.information.title}</h2>
                    <ul>
                        <li key="servings">{this.state.information.servings} servings</li>
                        <li key="time">{this.state.information.readyInMinutes} minutes</li>
                    </ul>
                    <h2>Ingredients:</h2>  
                    <ul>{this.state.allIngredients.map(ingredient => {
                        return (
                            <MarkedIngredient key={ingredient.id} name={ingredient.name} 
                            original={ingredient.original} missed={this.state.missedIngredients}/>
                        );
                        })}
                    </ul>  
                </div>
                <h2 id="prep">{this.state.steps.length ? "Preparation:" : null}</h2>
                {this.state.steps.map(step => {
                    return (
                        <div className="recipe-steps">
                            <ol>{step.steps.map(each => {
                                return (<li key={1+Math.random()}>{each.step}</li>);
                                })}
                            </ol>
                        </div>
                    );
                })}
            </div>
        );
    }
}

//compare missed ingredients with complete ingredient list
function MarkedIngredient(props) {
    return (
    <li className="ingredient">{props.missed.includes(props.name) ? 
    <div><FaTimes className="cross"/>{props.original}</div> : <div><FaCheck className="check"/>{props.original}</div>}</li>
    );
}

export { MarkedIngredient };
export default Recipe;
