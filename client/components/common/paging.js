import React, {Component} from 'react';
import _ from 'underscore';
import {Link} from 'react-router-dom';

const pagingDeviation = 2;
class Paging extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageIndex: props.pageIndex,
            totalPageCount: props.totalPageCount,
            pagingUrl: props.pagingUrl
        }        
    }

    handleOnClick(){
        alert('clicked');
    }

    getPreviousPageLi(){
        if(this.props.pageIndex > 1)
            return <li><Link to={this.props.pagingUrl + "/" + (this.props.pageIndex - 1)}>«</Link></li>;
        else
            return null;
    }

    getPagesLi(){
        let diff = this.props.pageIndex - pagingDeviation;     
        let startIndex = this.props.pageIndex > 0 ? (diff < 1 ? 1 : diff) : 1;  
        let arr = _.range(startIndex, this.props.totalPageCount + 1);
        let result = arr.map(i => {
                    let comp = <li key={i}><Link to={this.props.pagingUrl + "/" + i}>{ i }</Link></li>;
                    if(i === this.props.pageIndex){
                            comp = <li key={i} className="active"><Link to={this.props.pagingUrl + "/" + i}>{ i }</Link></li>;   
                    }
                    if(i - this.props.pageIndex >= pagingDeviation)
                        return null;
                    else
                        return comp;
                    });
        return result;
    }

    getNextPageLi(){
        if(this.props.pageIndex < this.props.totalPageCount)
            return <li><Link onClick={this.handleOnClick} to={this.props.pagingUrl + "/" + (this.props.pageIndex + 1)}>»</Link></li>;
        else
            return null;
    }

    render(){
        if(this.props.totalPageCount == 0){
            return (<div></div>);        
        }
        else{
            return(            
                <div id="Paging" className="textAlignCenter">
                        Page {this.props.pageIndex} of {this.props.totalPageCount}
                        <div className="pagination-container">
                            <ul className="pagination">
                                {this.getPreviousPageLi()}
                                {this.getPagesLi()}
                                {this.getNextPageLi()}
                            </ul>
                        </div>
                </div>
            );                
        }        
    }
}

export default Paging;