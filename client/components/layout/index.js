import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container body-content">
                    { this.props.children }
                    <hr />
                    <Footer />
                </div>                     
            </div>              
        );
    }
}

export default Layout;
