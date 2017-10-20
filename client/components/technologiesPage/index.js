import React, {Component} from 'react';

class TechnologiesPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            technologies : ['React', 'Redux', 'Express', 'MongoDb', 'React Router'],
            patternsAndPractices : ['MVC', 'Dependency Injection'], 
            buildTools: ['Babel', 'Gulp', 'WebPack']
        };
    }

    render(){
        
        return(
        <div>
            <h2>Technologies Used:</h2>
            <ul>
                {this.state.technologies.map(t => <li>{t}</li>)}           
            </ul>
            <br/>
            <h2>Patterns and Practices Followed:</h2>
            <ul>
                {this.state.patternsAndPractices.map(t => <li>{t}</li>)}           
            </ul>
            <br/>
            <h2>Build Tools:</h2>
            <ul>
                {this.state.buildTools.map(t => <li>{t}</li>)}           
            </ul>
        </div>
        );
    }
}

export default TechnologiesPage;