import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "./Products";
import {Programs} from "./Programs";
import {Login} from "./Login";
import Cart from "./Cart";
import { connect } from 'react-redux';
import Checkout from "./Checkout";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleNav: false,
            showCart: false,
            matchMedia: false
        };
        this.scrollTop = 0;
        this.toggleNav = this.toggleNav.bind(this);
        this.openCart = this.openCart.bind(this);
        this.closeCart = this.closeCart.bind(this);
        this.matchMedia = this.matchMedia.bind(this);
        this.checkout = this.checkout.bind(this);
    }
    toggleNav(){
        this.setState({
            toggleNav: this.state.toggleNav?false:true
        });
    }
    openCart(){
        this.scrollTop = -window.pageYOffset;
        this.setState({
            showCart: true,
            toggleNav: false
        });
    }
    closeCart(){
        if(!this.state.matchMedia){
            this.scrollTop = -window.pageYOffset;
        }
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.overflow = "";
            window.scroll(0, -this.scrollTop);
        this.setState({
            showCart: false
        });
    }
    checkout(){
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.overflow = "";
        window.scroll(0, 0);
        this.setState({
            showCart: false
        });
    }
    matchMedia(x){
        if(x.matches){
            this.setState({
                matchMedia: true
            });
        }else{
            this.setState({
                matchMedia: false
            })
        }
    }
    componentWillMount(){
        this.matchMedia(window.matchMedia("(max-width:730px)"));
    }
    componentDidMount(){
        window.matchMedia("(max-width:730px)").addListener(this.matchMedia);
    }
    componentWillUpdate(nextProps, nextState){
        if (!this.state.matchMedia&&nextState.matchMedia&&nextState.showCart&&this.state.showCart) {
            this.scrollTop = - window.pageYOffset;
        }
        if(nextState.showCart&&this.state.showCart&&!nextState.matchMedia&&this.state.matchMedia){
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.overflow = "";
            window.scroll(0, -this.scrollTop);
        }
    }

    render() {
        // console.log("offsetY: "+window.pageYOffset);
        // console.log(this.scrollTop);
        // console.log("media: "+this.state.matchMedia);
        // console.log("cart: "+this.state.showCart);
        if(this.state.showCart&&this.state.matchMedia){
                document.body.style.position = "fixed";
                document.body.style.top = this.scrollTop+"px";
                document.body.style.overflow = "hidden";
        }
        let count = 0;
        if(this.props.cart.length){
            count = this.props.cart.map(item=>item.quantity).reduce((a,b)=>a+b);
        }
    return (
    <div className="app">
        <Router>
        <div>
        <nav>
            <Link to="/"><img src="https://eatfitfood.com.au/assets/images/logo.png" alt="Eat Fit Food"/></Link>
            <ul className="nav">
                <li><Link to="/products">A LA CARTE</Link></li>
                <li><Link to="/programs">MEAL PROGRAMS</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><i className="fa fa-shopping-cart" onClick={this.openCart}></i><span className="nav-count" style={{opacity:count?1:0, transform: count?"scale(1)":"scale(0)"}}>{count}</span></li>
            </ul>
            <ul className="nav-mobile">
                <li><i className="fa fa-shopping-cart" onClick={this.openCart}></i><span className="nav-count" style={{opacity:count?1:0, transform: count?"scale(1)":"scale(0)"}}>{count}</span></li>
                <li><i className="fa fa-bars" onClick={this.toggleNav}></i></li>
            </ul>
        </nav>
        <div className="toggle-nav" style={{height:this.state.toggleNav?186:0}}>
            <ul>
                <li><Link to="/products" onClick={this.toggleNav}>A LA CARTE</Link></li>
                <li><Link to="/programs" onClick={this.toggleNav}>MEAL PROGRAMS</Link></li>
                <li><Link to="/login" onClick={this.toggleNav}>LOGIN</Link></li>
            </ul> 
        </div>
        <Cart showCart={this.state.showCart} closeCart={this.closeCart} checkout={this.checkout}/>
        <Route exact path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/programs" component={Programs} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <div id="snackbar-container"></div>
        </div>
        </Router>
    </div>
    );
  }
}

export default connect(state=>({
    cart: state.cart
}))(App);
