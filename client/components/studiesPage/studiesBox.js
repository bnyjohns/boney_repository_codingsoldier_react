import React, {Component} from 'react';

class StudiesBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">                            
                        <b>{this.props.study.studyHeader}</b>
                        <br />
                        <i>Category: {this.props.study.categoryName}</i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-12 col-sm-2">                        
                        <pre>{this.props.study.studyContent}</pre>
                    </div>
                </div>
                <div className="row marginTop-5px">
                </div>
            </div>
        );
    }
}

export default StudiesBox;