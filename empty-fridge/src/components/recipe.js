import React, { Component } from 'react';

class Recipe extends Component {
    state = {  
        missedIngredients: []
    }

    componentDidMount() {
        this.setState ({
            missedIngredients: this.props.location.state
        })
    }

    render() { 
    return ( 
            <div>{this.state.missedIngredients.map(ingredient => {
                return(<p>{ingredient.name}</p>);
                 })} 
            </div> 
        );
    }
}
 
export default Recipe;