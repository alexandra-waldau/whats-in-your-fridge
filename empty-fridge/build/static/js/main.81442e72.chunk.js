(this["webpackJsonpempty-fridge"]=this["webpackJsonpempty-fridge"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(12),r=n.n(s),c=(n(20),n(10)),l=n(13),o=n(2),u=n(3),d=n(5),p=n(4),h=(n(21),n(6)),m=n.n(h),f=n(9),v=(n(23),n(1));n(24);var g=function(e){var t=e.image,n=e.title,a=e.likes;return i.a.createElement("div",{className:"recipe item"},i.a.createElement("div",{className:"image-cropper"},i.a.createElement("img",{src:t,alt:"jpg"})),i.a.createElement("div",{className:"recipe description"},i.a.createElement("h2",null,n),i.a.createElement("div",{className:"likes"},i.a.createElement(v.b,null),i.a.createElement("p",null,a))),i.a.createElement("button",{id:"open-recipe",onClick:e.buttonClick},"View recipe"))},E=n(14);n(25);function b(e){return i.a.createElement("li",{className:"ingredient"},e.missed.includes(e.name)?i.a.createElement("div",null,i.a.createElement(v.d,{className:"cross"}),e.original):i.a.createElement("div",null,i.a.createElement(v.a,{className:"check"}),e.original))}var k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={missedIngredients:[],allIngredients:[],information:[],steps:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchRecipe(this.props.id.toString()),this.getMissedIngredients(this.props.missed)}},{key:"componentDidUpdate",value:function(e){this.props.refresh!==e.refresh&&(this.fetchRecipe(this.props.id),this.getMissedIngredients(this.props.missed))}},{key:"fetchRecipe",value:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,i,s,r,c,l,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.spoonacular.com/recipes/".concat(t,"/information?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc"),a="https://api.spoonacular.com/recipes/".concat(t,"/analyzedInstructions?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc"),e.prev=2,e.next=5,Promise.all([fetch(n),fetch(a)]);case 5:return i=e.sent,s=Object(E.a)(i,2),r=s[0],c=s[1],e.next=11,r.json();case 11:return l=e.sent,e.next=14,c.json();case 14:o=e.sent,this.setState({information:l,steps:o,allIngredients:l.extendedIngredients}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[2,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMissedIngredients",value:function(e){var t=[];e.forEach((function(e){t.push(e.name)})),this.setState({missedIngredients:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"recipe detail"},i.a.createElement("div",{className:"img-cropper"},i.a.createElement("img",{src:this.state.information.image,alt:"jpg"})),i.a.createElement("div",{className:"recipe-information"},i.a.createElement("h2",null,this.state.information.title),i.a.createElement("ul",null,i.a.createElement("li",{key:"servings"},this.state.information.servings," servings"),i.a.createElement("li",{key:"time"},this.state.information.readyInMinutes," minutes")),i.a.createElement("h2",null,"Ingredients:"),i.a.createElement("ul",null,this.state.allIngredients.map((function(t){return i.a.createElement(b,{key:t.id,name:t.name,original:t.original,missed:e.state.missedIngredients})})))),i.a.createElement("h2",{id:"prep"},this.state.steps.length?"Preparation:":null),this.state.steps.map((function(e){return i.a.createElement("div",{className:"recipe-steps"},i.a.createElement("ol",null,e.steps.map((function(e){return i.a.createElement("li",{key:1+Math.random()},e.step)}))))})))}}]),n}(a.Component);function y(e){return i.a.createElement("p",{id:"counter"},e.count," results")}var I=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={recipes:[],showRecipeDetail:!1,showRecipeID:"",missedIngredients:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchRecipes(this.props.url)}},{key:"componentDidUpdate",value:function(e){this.props.refresh!==e.refresh&&this.fetchRecipes(this.props.url)}},{key:"fetchRecipes",value:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({recipes:a,counter:a.length}),0===a.length&&this.setState({showRecipeID:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"showRecipe",value:function(e,t){this.setState({showRecipeDetail:!this.state.showRecipeDetail,showRecipeID:e,missedIngredients:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"wrapper"},i.a.createElement(y,{count:this.state.counter}),i.a.createElement("div",{id:"recipe-view"},0!==this.state.counter?i.a.createElement("div",{className:"recipes-list"},this.state.recipes.map((function(t){return i.a.createElement(g,{key:t.id,title:t.title,image:t.image,likes:t.likes,buttonClick:function(){return e.showRecipe(t.id,t.missedIngredients)}})}))):i.a.createElement("div",{id:"no-results"},"Sorry, no results have been found."),i.a.createElement("div",{className:"recipe-detail"},this.state.showRecipeID&&i.a.createElement(k,{id:this.state.showRecipeID,missed:this.state.missedIngredients,refresh:this.state.showRecipeDetail}))))}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={inputValue:"",ingredients:[],recipesVisible:!1,refreshRecipes:!1,searchURL:""},a}return Object(u.a)(n,[{key:"updateInput",value:function(e,t){this.setState(Object(l.a)({},e,t))}},{key:"deleteIngredient",value:function(e){var t=Object(c.a)(this.state.ingredients);t=t.filter((function(t){return t.id!==e})),this.setState({ingredients:t})}},{key:"addIngredient",value:function(){var e={id:1+Math.random(),value:this.state.inputValue.slice()},t=Object(c.a)(this.state.ingredients);t.push(e),this.setState({ingredients:t,inputValue:""})}},{key:"getRequestURL",value:function(){var e="https://api.spoonacular.com/recipes/findByIngredients?apiKey=eebaf36af5f24fd3ae3a2bd4095cf3cc&ingredients=",t=[];this.state.ingredients.map((function(e){return e.value})).forEach((function(e){t.includes(e)||t.push(e)}));var n=t.length;return t.forEach((function(a){a!==t[n-1]?e+=a+",+":e+=a})),e+="&number=50"}},{key:"search",value:function(){this.state.recipesVisible?this.setState({refreshRecipes:!this.state.refreshRecipes,searchURL:this.getRequestURL()}):this.setState({recipesVisible:!0,searchURL:this.getRequestURL()})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"Cook IT"),i.a.createElement("div",{className:"input container"},i.a.createElement("input",{className:"input-field",type:"text",placeholder:"Add an ingredient",value:this.state.inputValue,onChange:function(t){return e.updateInput("inputValue",t.target.value)}}),i.a.createElement("button",{id:"add-button",onClick:function(){return e.addIngredient()}},i.a.createElement(v.c,null)))),i.a.createElement("section",{id:"ingredients"},i.a.createElement("ul",{className:"ingredient list"},this.state.ingredients.map((function(t){return i.a.createElement("li",{key:t.id},t.value,i.a.createElement("button",{id:"delete-button",onClick:function(){return e.deleteIngredient(t.id)}},i.a.createElement(v.d,null)))})),i.a.createElement("button",{disabled:0===this.state.ingredients.length,id:"search-button",onClick:function(){return e.search()}},"Find recipes"))),i.a.createElement("section",{id:"recipes"},this.state.recipesVisible&&i.a.createElement(I,{url:this.state.searchURL,refresh:this.state.refreshRecipes})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.81442e72.chunk.js.map