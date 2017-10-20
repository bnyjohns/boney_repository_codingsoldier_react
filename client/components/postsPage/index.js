import React, {Component} from 'react';
import PostsBox from './postsBox';
import querystring from 'querystring';
import axios from 'axios';
import Paging from '../common/paging';
import config from '../../../server/config';

let postsUrl = `http://localhost:${config.port}/api/posts/getPosts?page=`;
class PostsPage extends Component{
    constructor(props){
        super(props);          
        this.state = {
            pageIndex: 1,
            totalPageCount : 0,
            posts : null,
            pagingUrl: '/posts'
        };              
    }    

    componentWillMount(){
        let url = `${postsUrl}${this.state.pageIndex}`;
        this.getPosts(url);
    }

    getPosts(url) {
        const response = axios.get(url);
        response
            .then(res => {
                let { pageIndex, totalPageCount, posts } = res.data;
                this.setState((prevState, props) => {
                    return {
                        pageIndex: pageIndex,
                        totalPageCount: totalPageCount,
                        posts: posts
                    };
                });
            })
            .catch(reason => {
                console.log(reason);
            });
    }

    componentWillReceiveProps(nextProps) {
        let url = `${postsUrl}${nextProps.match.params.page}`;
        this.getPosts(url);        
    }
    

    render(){     
        let postBoxes = null;
        if(this.state.posts){            
            postBoxes = this.state.posts.map(p => { return <PostsBox post={p} key={p.id} /> });
        }       
        
        return(
            <div>
                 <h2>Posts</h2>
                <p>
                    <a href="/posts/create"></a>
                </p>
                {postBoxes}
                <Paging pageIndex={this.state.pageIndex} totalPageCount={this.state.totalPageCount} pagingUrl={this.state.pagingUrl} />
            </div>
        );
    }
}

export default PostsPage;