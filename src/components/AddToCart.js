import React from 'react';
import { connect } from 'react-redux';
import {addToCart,deleteFromCart} from "../actions";
import Nutrition from "./Nutrition";
import {alert_float} from "asmex-os-packs";

class AddToCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : this.props.sizes[0].size
        };
        this.changeSize = this.changeSize.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
    }
    changeSize(e){
        this.setState({
            size: e.target.value
        });
    }
    addToCart(){
        this.props.dispatch(addToCart(this.props.product,this.state.size));
    }
    deleteFromCart(quantity){
        return ()=>{
            if(quantity){
                return this.props.dispatch(deleteFromCart(this.props.product,this.state.size));
            }
            else{
                alert_float("warning","This item is not in your cart yet.");
            }
        }
    }
    render(){
        const count = () => {
            for(let i=0; i<this.props.cart.length;i++){
                if(this.props.cart[i].product_id===this.props.product&&this.props.cart[i].size===this.state.size){
                    return this.props.cart[i].quantity;
                }
            }
        }
        const quantity = count();
        return (
            <div>
                <span className="product-count" style={{opacity:quantity?1:0, transform: quantity?"scale(1)":"scale(0)"}}>{quantity}</span>
                <Nutrition display={this.props.nutrition} diets={this.props.diets} nutritional={this.props.sizes.filter(size=>size.size===this.state.size)[0].nutritional}/>
                <p>{this.props.name}</p>
                <div className="select">
                    <select onChange={this.changeSize}>
                        {this.props.sizes.map(size=>{
                            return (
                                <option key={size.size} value={size.size}>{size.size}: ${size.price.toFixed(2)}</option>
                            );
                        })}
                    </select>
                </div>
                <i className="fa fa-minus" onClick={this.deleteFromCart(quantity)}></i>
                <i className="fa fa-plus" onClick={this.addToCart}></i>
            </div>
        );
    }
}

export default connect(state=>({
    cart: state.cart
}))(AddToCart);