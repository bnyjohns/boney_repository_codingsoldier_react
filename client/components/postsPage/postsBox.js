import React, {Component} from 'react';

class PostsBox extends  Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">                            
                        <b>{this.props.post.postTitle}</b>
                        <br />
                        <i>Tags: {this.props.post.tags}</i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-12 col-sm-2">                        
                        <pre>{this.props.post.postContent}</pre>
                    </div>
                </div>
                <div className="row marginTop-5px">
                </div>
            </div>
        );
    }
}

export default PostsBox;