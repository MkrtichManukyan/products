import { Component } from "react";

class Description extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p>{this.props.description}</p>
        )
    }
};

export default Description;