import React, { Component } from 'react'
import GainersDisplay from './GainersDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Gainers extends Component {
    constructor(){
        super();
        this.state={stocks:[],fetch_check:false}
    }
    componentWillMount(){
        // setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/stock/gainers?apikey='+process.env.REACT_APP_SECRET_NAME)
        .then(response =>  response.json())
        .then(resData => {
            this.setState({stocks:resData.mostGainerStock,fetch_check:true})
            
        })
    // },5000)
    }
    render() {
        if(this.state.fetch_check)
        return (
            <div className='new-gainer-list inline'>
                   <div className='crypto-title'><a  href=''>Top Gainers&emsp;<FontAwesomeIcon icon={faArrowRight} /></a></div>
                   
            <GainersDisplay stocks={this.state.stocks}/>
            </div>
        )
        else
        return(<div></div>)
    }
}
