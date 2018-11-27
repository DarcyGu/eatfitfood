import React from "react";
import CropImage from "./CropImage";

class SelfieUpload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uploadUrl: "",
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false,
            c6: false,
            c7: false,
            c8: false,
            c9: false,
            c10: false,
            c11: false,
            c12: false
        }
        this.cupcakes = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"];
        this.getUrl = this.getUrl.bind(this);
        this.selectCupcake = this.selectCupcake.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    componentDidUpdate(prevProps){
        if(this.props.cupcake!==prevProps.cupcake){
            this.setState({
                [this.props.cupcake]: true
            });
        }
    }
    goBack(){
        this.props.close();
        this.setState({
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false,
            c6: false,
            c7: false,
            c8: false,
            c9: false,
            c10: false,
            c11: false,
            c12: false
        });

    }
    selectCupcake(cupcake){
        return ()=>{
            this.setState({
                [cupcake]: !this.state[cupcake]
            });
        }
    }
    getUrl(e){
        const file = e.target.files[0];
        const reader = new FileReader();
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
            reader.onloadend = ()=>{
                const dataURL = reader.result;
                this.setState({
                    uploadUrl: dataURL
                });
            }
        }
    }
    render(){
        const selected = [];
        this.cupcakes.forEach(cupcake=>{
            if(this.state[cupcake]){
                selected.push(cupcake);
            }
        });
        return (
            <div className="cart custom-slider" style={{transform: this.props.cupcake?"":"translateX(110%)"}}>
            <div className="cart-header">
                <i className="fa fa-long-arrow-alt-left" onClick={this.goBack}></i>
                <span className="cart-title">My Deliveries</span>
            </div>
            <div className="cart-items">
                <div className="custom-title">
                    <h2>{this.props.productName}</h2>
                    *Upload your image and crop it to a circle
                </div>
                <div className="selfie-upload">
                    <input type="file" accept="image/*" onChange={this.getUrl} />
                </div>
                <div className="croppie">
                    {this.props.cupcake&&<CropImage url={this.state.uploadUrl} cupcakes={selected} setImg={this.props.setImg} sendImg={this.props.sendImg} close={this.goBack}/>}
                </div>
                <div className="select-cupcakes">
                    Choose the cupcakes
                    <div className="cupcake-box">
                        {this.props.cupcakeList.map((cupcake,index)=>{
                            return (
                                <div key={index} className="cupcake-circle" onClick={this.selectCupcake(cupcake.cupcake)} style={{background: "url("+cupcake.img+") center center / cover no-repeat", boxShadow: this.state[cupcake.cupcake]?"0 5px 25px -5px #92be48":"",border: this.state[cupcake.cupcake]?"2px solid #92be48":"2px solid #f0f0f0"}}>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="custom-blank-space"></div>
            </div>
        </div>
        );
    }
}

export default SelfieUpload;