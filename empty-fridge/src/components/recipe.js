import React, { Component } from 'react';
import { FaClock, FaCheck, FaTimes } from 'react-icons/fa';

class Recipe extends Component {
    state = {  
        id: '',
        missedIngredients: [],
        information: [],
        steps: []
    }

    componentDidMount() {
        this.setState ({
            id: this.props.id,
            missedIngredients: this.props.missed
        })
    }

    async fetchRecipe() {
        const requestInfoURL = "https://api.spoonacular.com/recipes?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc/" + this.state.id + "/information";
        const requestStepsURL = "https://api.spoonacular.com/recipes?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc/" + this.state.id + "/analyzedInstructions"

        try {
            const [info, steps] = await Promise.all([fetch(requestInfoURL), fetch(requestStepsURL)]);
            this.setState ({
                information: info,
                steps: steps
            });
        }
        catch(error) {
            console.log(error);
        }   
    }

    render() { 
    return ( 
            <div>
                {this.state.information.map(item => {
                    return (
                        <div className="recipe-information">
                            <img src={item.image}/>
                            <h2>{item.title}</h2>
                            <p>{item.servings} servings</p>
                            <p><FaClock/>{item.readyInMinutes}</p>
                            <ul>
                                {item.extendedIngredients.map(ingredient => {
                                <MarkedIngredient id ={ingredient.id} name={ingredient.original}/>
                            })}
                            </ul>    
                        </div>
                    );
                })}
                {this.state.steps.step.map(step => {
                    return (
                        <div className="recipe-steps">
                            <ol>
                                <li key={step.number}>{step.step}</li>
                            </ol>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function MarkedIngredient(props) {
    return (<li key={props.id}>{this.state.missedIngredients.includes(props.name) ? <FaCheck/> : <FaTimes/>}</li>);
}

export { MarkedIngredient };
export default Recipe;
