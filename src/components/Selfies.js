import React from "react";
import SelfieUpload from "./SelfieUpload";

class Selfies extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            showUpload: "",
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c5: "",
            c6: "",
            c7: "",
            c8: "",
            c9: "",
            c10: "",
            c11: "",
            c12: ""
        });
        this.selfies = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"];
        this.closeUpload = this.closeUpload.bind(this);
        this.setImg = this.setImg.bind(this);
    }
    componentDidMount(){
        this.props.selfies.forEach(selfie=>{
            this.setState({
                [selfie.cupcake]: selfie.img
            });
        });
    }
    componentDidUpdate(prevProps){
        if(!prevProps.selfies.length&&this.props.selfies.length){
            this.props.selfies.forEach(selfie=>{
                this.setState({
                    [selfie.cupcake]: selfie.img
                });
            });
        }
    }
    setImg(cupcake,url){
        this.setState({
            [cupcake]: url
        });
    }
    closeUpload(){
        this.setState({
            showUpload: ""
        });
    }
    render(){
        const cupcakeList = [
            {
                cupcake: "c1",
                img: this.state.c1
            },
            {
                cupcake: "c2",
                img: this.state.c2
            },
            {
                cupcake: "c3",
                img: this.state.c3
            },
            {
                cupcake: "c4",
                img: this.state.c4
            },
            {
                cupcake: "c5",
                img: this.state.c5
            },
            {
                cupcake: "c6",
                img: this.state.c6
            },
            {
                cupcake: "c7",
                img: this.state.c7
            },
            {
                cupcake: "c8",
                img: this.state.c8
            },
            {
                cupcake: "c9",
                img: this.state.c9
            },
            {
                cupcake: "c10",
                img: this.state.c10
            },
            {
                cupcake: "c11",
                img: this.state.c11
            },
            {
                cupcake: "c12",
                img: this.state.c12
            }
        ]
        return (
            <div className="cart custom-slider selfie" style={{transform: this.props.show?"":"translateX(110%)"}}>
            <div className="cart-header">
                <i className="fa fa-long-arrow-alt-left" onClick={this.props.closeCustom}></i>
                <span className="cart-title">My Deliveries</span>
            </div>
            <div className="cart-items">
                <div className="custom-title">
                    <h2>{this.props.productName}</h2>
                    *Click on the cupcakes below to upload and edit your custom photos.
                </div>
                <div className="ribbon-grid" >
                    {this.selfies.map((selfie,index)=>{
                        return (
                            <div className="selfie-box" key={selfie} onClick={()=>{this.setState({showUpload: selfie})}} style={{background: this.state[selfie]?"url("+this.state[selfie]+") center center / cover no-repeat":""}}>
                               <span>
                                   {!this.state[selfie]&&"+"}
                                </span>
                            </div> 
                        );    
                    })}
                </div>
                <SelfieUpload cupcakeList={cupcakeList} cupcake={this.state.showUpload} close={this.closeUpload} productName={this.props.productName} setImg={this.setImg} sendImg={this.props.sendImg} />
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

export default Selfies;