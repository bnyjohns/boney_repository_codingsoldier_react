import { Switch, Route, Redirect } from 'react-router-dom';
import React, {Component} from 'react';
import HomePage from './homePage';
import PostsPage from './postsPage';
import StudiesPage from './studiesPage';
import AboutPage from './aboutPage';
import TechnologiesPage from './technologiesPage';

class Main extends Component {
    constructor(props){        
        super(props);
    }

    render(){
        return(
            <main>
                <Switch>                    
                    <Route exact path='/' component={HomePage}/>    
                    <Route path='/posts' component={PostsRouter} />                                                                         
                    <Route path='/studies' component={StudiesRouter} />
                    <Route path='/home/about/boney-johns' component={AboutPage} />
                    <Route path='/technologies' component={TechnologiesPage} />
                </Switch>
            </main>
        );
    }
}

const PostsRouter = () => (
    <Switch>
      <Route exact path='/posts' component={PostsPage} />
      <Route path='/posts/:page' component={PostsPage} />
    </Switch>
);

const StudiesRouter = () => (
    <Switch>
      <Route exact path='/studies' component={StudiesPage} />
      <Route path='/studies/:page' component={StudiesPage} />
    </Switch>
);

export default Main;