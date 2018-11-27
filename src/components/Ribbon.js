import React from "react";

class Ribbon extends React.Component{
    constructor(props){
        super(props);
        this.addRibbon = this.addRibbon.bind(this);
    }
    addRibbon(color){
        return ()=>{this.props.addRibbon(color)}
    }
    render(){
        const color = this.props.ribbonList;
        return (
            <div className="cart custom-slider" style={{transform: this.props.show?"":"translateX(110%)"}}>
            <div className="cart-header">
                <i className="fa fa-long-arrow-alt-left" onClick={this.props.closeCustom}></i>
                <span className="cart-title">My Deliveries</span>
            </div>
            <div className="cart-items">
                <div className="custom-title">
                    <h2>{this.props.productName}</h2>
                    *Select your ribbon colour
                </div>
                <div className="ribbon-grid">
                    {color.map((color,index)=>{
                        return (
                            <div className="ribbon-select" key={index} onClick={this.addRibbon(color.id_item)} style={{boxShadow: this.props.color===color.id_item?"0 5px 25px 0 #92be48":"",border: this.props.color===color.id_item?"1px solid #92be48":"1px solid transparent",color: this.props.color===color.id_item?"#92be48":"black"}}>
                                <div className="ribbon-color" style={{background: "url("+color.thumb+") center center / cover no-repeat"}}>
                                </div>
                                {color.name.charAt(0).toUpperCase()+color.name.slice(1)}
                            </div>
                        );
                    })}
                </div>
                {this.props.children}
                <div className="custom-blank-space"></div>
            </div>
            <div className="cart-summary">
                <div className="checkout" onClick={this.props.closeCustom}>
                    CONFIRM
                </div>
            </div>
        </div>
        );
    }
}

export default Ribbon;