import React, { Component} from "react"
import ReactDOM from 'react-dom';

class KnappTest extends React.Component {

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className="randomliste">
                <h1>Dette er en random liste for {this.props.name} </h1>

                <button className="testKnapp" onClick={()=> this.props.header.background = "#FFFFF"}>
                 </button>
                <ul>
                    <li>
                        dog
                    </li>
                    <li>dog</li>
                    <li>dog</li>
                    <li>dog</li>
                </ul>
            </div> 
        );
    }
} 
export default KnappTest;