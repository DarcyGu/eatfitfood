import React from "react";
import { connect } from 'react-redux';

class Nutrition extends React.Component {
    render(){
        const nutritional = this.props.nutritional;
        return (
            nutritional ? (
                <div className="nutrition" style={{opacity:this.props.display?1:0}}>
                    <div className="diets">
                        {this.props.diets.includes("VGN")&&<span>Vegan</span>}
                        {this.props.diets.includes("GF")&&<span>Gluten Free</span>}
                        {this.props.diets.includes("DF")&&<span>Dairy Free</span>}
                    </div>
                    <span>Calories<br />{nutritional.calories}</span>
                    <span>Protein<br />{nutritional.protein}g</span>
                    <span>Carbs<br />{nutritional.carbs}g</span>
                    <span>Fat<br />{nutritional.fat}g</span>
                </div>
            ) : null
        );
    }
}
export default connect(state=>({
    products: state.products
}))(Nutrition);