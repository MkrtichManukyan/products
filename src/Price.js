import { Component } from "react";

class Price extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p>{this.props.price}</p>
        )
    }
};

export default Price;