import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                        <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>                        
                        <Link className="navbar-brand" to="/">Coding Soldier</Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/studies">Studies</Link></li>
                            <li><Link to="/technologies">Technologies</Link></li>
                            <li><Link to="/home/about/boney-johns">About</Link></li>                    
                        </ul>
                    </div>
            </div>
            </div>
            <div className="img-codingSoldier">
                <img src="/client/public/images/soldier.png" />
            </div>
        </div>
        );
    }
}

export default Header;