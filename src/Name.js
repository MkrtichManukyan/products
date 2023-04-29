import { Component } from "react";

class Name extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p>{this.props.name}</p>
        )
    }
};

export default Name;