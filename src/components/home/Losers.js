import React, { Component } from 'react'
import LosersDisplay from './LosersDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Losers extends Component {
    constructor(){
        super();
        this.state={stocks:[],fetch_check:false}
    }
    componentWillMount(){
        // setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/stock/losers?apikey='+process.env.REACT_APP_SECRET_NAME)
        .then(response =>  response.json())
        .then(resData => {
            this.setState({stocks:resData.mostLoserStock,fetch_check:true})
            
        })
    // },5000)
    }
    render() {
        if(this.state.fetch_check)
        return (
            <div className='losers-list inline'>
                   <div className='crypto-title'><a  href=''>Top Losers&emsp;<FontAwesomeIcon icon={faArrowRight} /></a></div>
                   
            <LosersDisplay stocks={this.state.stocks}/>
            </div>
        )
        else
        return(<div></div>)
    }
}
