import React from "react";
import { connect } from "react-redux";
import {addToCart,deleteFromCart,applyDiscount,removeDiscount} from "../actions";
import OrderSumarry from "./OrderSummary";
import {alert_float} from "asmex-os-packs";

export class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            unit: "",
            street: "",
            suburb: "",
            state: "",
            postal: "",
            phone: "",
            delivery: "",
            save: false
        };
        this.saveInfo = this.saveInfo.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.applyDiscount = this.applyDiscount.bind(this);
        this.removeDiscount = this.removeDiscount.bind(this);
        this.requestCardNonce = this.requestCardNonce.bind(this);
        this.paymentForm = null;
    }
    requestCardNonce(event){
        event.preventDefault();
        this.paymentForm.requestCardNonce();
    }
    componentDidMount(){
        const loadState = () => {
            try {
                const serializedState = localStorage.getItem("checkout-form");
                if(serializedState===null){
                    return undefined;
                }
                return JSON.parse(serializedState);
            }catch(err){
                return undefined;
            }
        }
        if(loadState()){
            this.setState(loadState());
        }
        window.scroll(0,0);
        var applicationId = "sandbox-sq0idp-ZPH5SuNiWDwuOsPWJa3lGg";
          var locationId = "CBASEOVvgXDY-TMThamG0deBzKkgAQ";
          this.paymentForm = new window.SqPaymentForm({
            applicationId: applicationId,
            locationId: locationId,
            autoBuild: false,
            inputClass: 'sq-input',
            inputStyles: [{
                fontSize: '1em'
            }],
            applePay: false,
            googlePay: false,
            masterpass: false,
            cardNumber: {
              elementId: 'sq-card-number',
              placeholder: '•••• •••• •••• ••••'
            },
            cvv: {
              elementId: 'sq-cvv',
              placeholder: 'CVV'
            },
            expirationDate: {
              elementId: 'sq-expiration-date',
              placeholder: 'MM/YY'
            },
            postalCode: false,
            callbacks: {
              methodsSupported: function (methods) {
                var applePayBtn = document.getElementById('sq-apple-pay');
                var googlePayBtn = document.getElementById('sq-google-pay');
                var masterpassBtn = document.getElementById('sq-masterpass');
                if (methods.applePay === true) {
                  applePayBtn.style.display = 'inline-block';
                }
                if (methods.googlePay === true) {
                  googlePayBtn.style.display = 'inline-block';
                }
                if (methods.masterpass === true) {
                  masterpassBtn.style.display = 'inline-block';
                }
              },
              cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
                if (errors) {
                  const message = errors.map(error=>error.message);
                  alert_float("danger",message.join(". "));
                  return;
                }
                alert_float("success", 'Nonce received: ' + nonce);
                document.getElementById('card-nonce').value = nonce;
                // document.getElementById('nonce-form').submit();
              }
            }
          });
          this.paymentForm.build();
    }
    componentWillUnmount(){
        this.paymentForm.destroy();
    }
    componentDidUpdate(){
        const checkoutForm = this.state;
        localStorage.setItem("checkout-form",JSON.stringify(checkoutForm));
    }
    saveInfo(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSave(e){
        this.setState({
            save: e.target.checked
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
                        <span className="minus" onClick={()=>{this.props.dispatch(deleteFromCart(item.product_id,item.size))}}><i className="fa fa-minus"></i></span>
                        <span className="quantity">{item.quantity} </span>
                        <span className="add" onClick={()=>{this.props.dispatch(addToCart(item.product_id,item.size))}}><i className="fa fa-plus"></i></span>
                    </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="checkout-banner">
                </div>
                <div className="checkout-wrapper">
                    <OrderSumarry />
                    <div className="checkout-main">
                        <div className="customer-info">
                            <h2>Customer information</h2>
                            <span className="login-link">Already have an account? <a>Log in</a></span>
                        </div>
                        {/* <form autoComplete="on"> */}
                        <form id="nonce-form" noValidate action="/success" method="post">
                            <div>
                                <input name="email" type="email" placeholder=" " autoComplete="email" value={this.state.email} onChange={this.saveInfo}/>
                                <label>Email*</label>
                            </div>
                            <div className="half-div">
                                <input name="fname" type="text" placeholder=" " spellCheck="false" autoComplete="given-name" value={this.state.fname} onChange={this.saveInfo} />
                                <label>First Name*</label>
                            </div>
                            <div className="half-div">
                                <input name="lname" type="text" placeholder=" " spellCheck="false" autoComplete="family-name" value={this.state.lname} onChange={this.saveInfo} />
                                <label>Last Name*</label>
                            </div>
                            <div className="one-third-div">
                                <input name="unit" type="text" placeholder=" " value={this.state.unit} onChange={this.saveInfo} />
                                <label>Unit/Suite/Tower</label>
                            </div>
                            <div className="two-thirds-div">
                                <input name="street" type="text" spellCheck="false" placeholder=" " value={this.state.street} onChange={this.saveInfo} />
                                <label>Street Address*</label>
                            </div>
                            <div className="one-third-div">
                                <input name="suburb" type="text" placeholder=" " value={this.state.suburb} onChange={this.saveInfo} />
                                <label>Suburb*</label>
                            </div>
                            <div className="one-third-div">
                                <input name="state" type="text" placeholder=" " autoComplete="state" value={this.state.state} onChange={this.saveInfo} />
                                <label>State*</label>
                            </div>
                            <div className="one-third-div">
                                <input name="postal" type="tel" placeholder=" " maxLength="4" autoComplete="postal-code" value={this.state.postal} onChange={this.saveInfo} />
                                <label>Postcode*</label>
                            </div>
                            <div>
                                <input name="phone" type="tel" placeholder=" " autoComplete="tel" value={this.state.phone} onChange={this.saveInfo} />
                                <label>Phone*</label>
                            </div>
                            <div>
                                <div className="textarea-wrapper">
                                    <div className="expandable-textarea">{this.state.delivery||"1"}</div>
                                    <textarea name="delivery" placeholder=" " value={this.state.delivery} onChange={this.saveInfo}></textarea>
                                    <label className="delivery-label">Delivery Instructions*</label>
                                </div>
                                    {/* <input name="delivery" type="text" placeholder=" " value={this.state.delivery} onChange={this.saveInfo} /> */}

                            </div>
                            <div className="save-info">
					            <label className="checkbox"><input type="checkbox" value="save" checked={this.state.save} onChange={this.handleSave}/><span></span>Save this information for next time</label>
				            </div>
                            <h2>Payment</h2>
                            <div className="payment">
                                <input name="ccname" type="text" placeholder=" " spellCheck="false" autoComplete="cc-name" />
                                <label>Cardholder Name*</label>
                            </div>
                            <div className="payment">
                            <div id="sq-card-number"></div>
                                {/* <input name="cardnumber" type="tel" maxLength="22" placeholder="•••• •••• •••• ••••" autoComplete="cc-number" /> */}
                                <label>Card Number*</label>
                            </div>
                            <div className="half-div payment">
                            <div id="sq-expiration-date"></div>
                                {/* <input name="exp-date" type="tel" placeholder="MM/YY" maxLength="5" autoComplete="cc-exp" /> */}
                                <label>Expiry Date*</label>
                            </div>
                            <div className="half-div payment">
                            <div id="sq-cvv"></div>
                                {/* <input name="cvc" type="tel" placeholder="CVV" maxLength="3" autoComplete="cc-csc" /> */}
                                <label>CVV Code*</label>
                            </div>
                            <div>
                                <button id="sq-creditcard" className="button-credit-card" onClick={this.requestCardNonce} type="submit">Compelte Order</button>
                            </div>
                            <input type="hidden" id="card-nonce" name="nonce" />
                        </form>
                    </div>
                    <div className="checkout-cart">
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
            </div>
        );
    }
}

export default connect(state=>({
    cart: state.cart,
    products: state.products,
    discount: state.discount
}))(Checkout);