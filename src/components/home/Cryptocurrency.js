import React, { Component } from 'react'
import CryptocurrencyDisplay from './CryptocurrencyDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Cryptocurrency extends Component {
    constructor(){
        super();
        this.state={crypto:[],fetch_check:false}
    }
    componentWillMount(){
        setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/cryptocurrencies')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({crypto:resData.cryptocurrenciesList.slice(0,7),fetch_check:true})
            
        })
    },5000)
    }
    render() {
        if(this.state.fetch_check)
        return (
            <div className='crypto-list inline'>
                   <div className='crypto-title'><a  href=''>Cryptocurrencies&emsp;<FontAwesomeIcon icon={faArrowRight} /></a></div>
                   
            <CryptocurrencyDisplay crypto={this.state.crypto}/>
            </div>
        )
        else
        return(<div></div>)
    }
}
