import React from "react";
import { connect } from "react-redux";
import {addToCart,deleteFromCart,clearCart,applyDiscount,removeDiscount} from "../actions";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {alert_float} from "asmex-os-packs";

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.applyDiscount = this.applyDiscount.bind(this);
        this.removeDiscount = this.removeDiscount.bind(this);
    }
    applyDiscount(e){
        if(e.target.previousElementSibling.value==="test"){
            this.props.dispatch(applyDiscount());
        }else{
            alert_float("success",'Try "test"');
        }
    }
    removeDiscount(){
        this.props.dispatch(removeDiscount());
    }
    render(){
        let total = 0;
        const productName =id=>{
            for(let i=0;i<this.props.products.length;i++){
                if(id===this.props.products[i].id_product){
                    return this.props.products[i].description;
                }
            }
        };
/////////////////////////// CUPCAKE//////////////////
        const productCustom =id=>{
            for(let i=0;i<this.props.products.length;i++){
                if(id===this.props.products[i].id_product){
                    return this.props.products[i].custom;
                }
            }
        }
/////////////////////////// CUPCAKE//////////////////////
        const productPrice =(id,size)=>{
            for(let i=0;i<this.props.products.length;i++){
                if(id===this.props.products[i].id_product){
                    for(let j=0;j<this.props.products[i].sizes.length;j++){
                        if(size===this.props.products[i].sizes[j].size){
                            return this.props.products[i].sizes[j].price;
                        }
                    }
                }
            }
        }
        const products = this.props.cart.map((item,index)=>{
            let price = productPrice(item.product_id,item.size);
            total += price * item.quantity;
            return (
                <div key={index} className="cart-item">
                    <div className="item-name">{productName(item.product_id)}</div>
                    <div className="item-grid">
                        <span className="item-size">{item.size}: ${price}</span>
                        <div className="quantity-control">
                            <span className="minus" onClick={()=>{this.props.dispatch(deleteFromCart(item.product_id,item.size))}}><i className="fa fa-minus"></i></span>
                            <span className="quantity">{item.quantity} </span>
                            <span className="add" onClick={()=>{this.props.dispatch(addToCart(item.product_id,item.size))}}><i className="fa fa-plus"></i></span>
                        </div>
                    </div>
                    {/* CUPCAKE */}
                    <CartItem custom={productCustom(item.product_id)} productName={productName(item.product_id)}/>
                    {/* CUPCAKE */}
                </div>
            );
        });
        let count = 0;
        this.props.cart.forEach(item=>count+=item.quantity);
        return(

        <div className="cart" style={{transform: this.props.showCart?"":"translateX(100%)"}}>
                <div className="cart-header">
                    <i className="fa fa-trash-alt" onClick={()=>{this.props.dispatch(clearCart())}}></i>
                    <span className="cart-title">MY ORDER</span>
                    <i className="fa fa-times" onClick={this.props.closeCart}></i>
                </div>
                <div className="cart-items">
                    {this.props.cart.length?<div><div className="cart-count">{count} {count>1?"items":"item"}</div>{products}</div>:<div className="cart-empty"><p>Your cart is empty.</p></div>}
                    <div className="cart-blank-space"></div>
                </div>
                {this.props.cart.length!==0&&
                <div className="cart-summary">
                <table className="cart-total">
                    <tbody>
                    <tr>
                        <th>Subtotal (Inc. GST)</th>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Delivery Fee</th>
                        <td>$7.00</td>
                    </tr>
                    <tr style={{display: this.props.discount?"":"none"}}>
                        <th>Discount <a onClick={this.removeDiscount}>(remove)</a></th>
                        <td>-${(total+7).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th><strong>Total</strong></th>
                        <td><strong>${this.props.discount?"0.00":(total+7).toFixed(2)}</strong></td>
                    </tr>
                    </tbody>
                </table>
                <div className="discount-grid">
                    <input className="discount-input" type="text" autoComplete="off" placeholder="Enter Code" />
                    <button className="discount-apply" onClick={this.applyDiscount}>APPLY</button>
                </div>
                <Link to="/checkout" onClick={this.props.checkout}>
                    <div className="checkout">
                        CHECKOUT
                    </div>
                </Link>
        </div>}

            </div>
            
        );
    }
}

export default connect(state=>({
    cart: state.cart,
    products: state.products,
    discount: state.discount
}))(Cart);