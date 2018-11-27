import React from "react";

class CardPreview extends React.Component{
    render(){
        return (
            <div className="card-preview" onClick={this.props.close}>
                <p>Click anywhere to close</p>
                <img className="preview-img" src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}

export default CardPreview;