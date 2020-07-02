import React, { Component } from 'react';

class Recipe extends Component {
    state = {  }
    render() { 
    return ( <div><p>{this.props.match.params.id}</p></div> );
    }
}
 
export default Recipe;