import React, {Component} from 'react';
import {Link} from 'react-router';
import Layout from '../layout';
import StudiesBox from './studiesBox';
import axios from 'axios';
import Paging from '../common/paging';
import config from '../../../server/config';

let studiesUrl = `http://localhost:${config.port}/api/studies/getStudies?page=`;
class StudiesPage extends Component{
    constructor(props){
        super(props);          
        this.state = {
            pageIndex: 1,
            totalPageCount : 0,
            studies : null,
            pagingUrl: '/studies'
        };              
    }
    
    componentWillMount(){
        let url = `${studiesUrl}${this.state.pageIndex}`;
        this.getStudies(url);
    }

    getStudies(url) {
        const response = axios.get(url);
        response
            .then(res => {
                let { pageIndex, totalPageCount, studies } = res.data;
                this.setState((prevState, props) => {
                    return {
                        pageIndex: pageIndex,
                        totalPageCount: totalPageCount,
                        studies: studies
                    };
                });
            })
            .catch(reason => {
                console.log(reason);
            });
    }

    componentWillReceiveProps(nextProps) {
        let url = `${studiesUrl}${nextProps.match.params.page}`;
        this.getStudies(url);        
    }

    render(){     
        let studiesBoxes = null;
        if(this.state.studies){            
            studiesBoxes = this.state.studies.map(s => { return <StudiesBox study={s} key={s.id} /> });
        }       
        
        return(
            <div>
                <h2>Studies</h2>
                <p>
                    <a href="/studies/create"></a>
                </p>
                {studiesBoxes}
                <Paging pageIndex={this.state.pageIndex} totalPageCount={this.state.totalPageCount} pagingUrl={this.state.pagingUrl} />
            </div>
        );
    }
}

export default StudiesPage;