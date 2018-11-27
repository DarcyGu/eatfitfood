import React from "react";
import { connect } from "react-redux";
import {addToCart,deleteFromCart,applyDiscount,removeDiscount} from "../actions";

export class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            show: false
        };
        this.applyDiscount = this.applyDiscount.bind(this);
        this.removeDiscount = this.removeDiscount.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        // this.removeProduct = this.removeProduct(this);
    }
    componentDidMount(){
        window.addEventListener("resize", this.setHeight);
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.setHeight);
    }
    componentDidUpdate(){
        const summaryCart = document.getElementById("summary-cart");
        if(this.state.show){
            summaryCart.style.height=Array.prototype.reduce.call(summaryCart.childNodes, function(p, c) {return p + (c.offsetHeight || 0);}, 0)+"px";
        }
    }
    toggleCart(){
        if(this.state.show){
            this.setState({
                show: false,
                height: 0
            });
        }else{
            this.setState({
                show: true
            });
            this.setHeight();
        }
    }
    setHeight(){
        const summaryCart = document.getElementById("summary-cart");
        this.setState({
            height: Array.prototype.reduce.call(summaryCart.childNodes, function(p, c) {return p + (c.offsetHeight || 0);}, 0)
        });
    }
    applyDiscount(e){
        if(e.target.previousElementSibling.value==="test"){
            this.props.dispatch(applyDiscount());
        }else{
            alert('Try "test"');
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
                        <span className="minus" onClick={()=>{
                            this.props.dispatch(deleteFromCart(item.product_id,item.size));
                            this.setHeight();
                        }}><i className="fa fa-minus"></i></span>
                        <span className="quantity">{item.quantity}</span>
                        <span className="add" onClick={()=>{this.props.dispatch(addToCart(item.product_id,item.size))}}><i className="fa fa-plus"></i></span>
                    </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="order-summary">
            <div className="order-summary-grid" onClick={this.toggleCart}>
            <div className="order-summary-title">
                    <i className="fa fa-shopping-cart"></i>
                    <span>{this.state.show?"Hide order summary":"Show order summary"}</span>
                </div>
                <div className="order-summary-total">
                    <strong>${!this.props.cart.length||this.props.discount?"0.00":(total+7).toFixed(2)}</strong>
                    <i className={this.state.show?"fa fa-chevron-up":"fa fa-chevron-down"}></i>
                </div>
            </div>
            <div id="summary-cart" className="checkout-cart" style={{height: this.state.show?this.state.height+"px":0}}>
            <div className="cart">
        <div className="cart-items">
            {products}
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
        </div>}

            </div>
        </div>
            </div>
        );
    }
}

export default connect(state=>({
    cart: state.cart,
    products: state.products,
    discount: state.discount
}))(OrderSummary);