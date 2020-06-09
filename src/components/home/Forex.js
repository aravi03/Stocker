import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Forex extends Component {
    constructor(){
        super();
        this.state={GBPUSD:new Object(),EURUSD:new Object(),EURGBP:new Object(),USDCAD:new Object(),fetch_check:false}
    }
    componentWillMount(){
        setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/quote/GBPUSD')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({GBPUSD:resData[0]})
            
        });
        fetch('https://financialmodelingprep.com/api/v3/quote/EURUSD')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({EURUSD:resData[0]})
            
        });
        fetch('https://financialmodelingprep.com/api/v3/quote/EURGBP')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({EURGBP:resData[0]})
            
        });
        fetch('https://financialmodelingprep.com/api/v3/quote/USDCAD')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({USDCAD:resData[0],fetch_check:true})
            
        });
    },5000)
        
    }
    render() {
      
        if(this.state.fetch_check){
        return (
           
            <div className='forex-list'>
                <div className='crypto-title'><a  href=''>Foreign Exchange&emsp;<FontAwesomeIcon icon={faArrowRight} /></a></div>
                <div className='crypto-box'>
                        <div className='crypto-item forex-head inline'>{this.state.EURUSD.name}</div>
                        
                        <div className='crypto-item inline'>{Math.round(this.state.EURUSD.price * 1000) / 1000}</div>
                        {this.state.EURUSD.change>0?<div className='crypto-item text-green bold inline'> +{Math.round(this.state.EURUSD.changesPercentage* 1000) / 1000 }%</div>
                        :<div className='crypto-item text-red bold inline'> { Math.round(this.state.EURUSD.changesPercentage * 1000) / 1000}%</div>
                        }
                        
                    </div>
                    <div className='crypto-box'>
                        <div className='crypto-item forex-head inline'>{this.state.GBPUSD.name}</div>
                        
                        <div className='crypto-item inline'>{Math.round(this.state.GBPUSD.price * 1000) / 1000}</div>
                        {this.state.GBPUSD.change>0?<div className='crypto-item text-green bold inline'> +{Math.round(this.state.GBPUSD.changesPercentage* 1000) / 1000 }%</div>
                        :<div className='crypto-item text-red bold inline'> { Math.round(this.state.GBPUSD.changesPercentage * 1000) / 1000}%</div>
                        }
                        
                    </div>
                    
                    <div className='crypto-box'>
                        <div className='crypto-item forex-head inline'>{this.state.EURGBP.name}</div>
                        
                        <div className='crypto-item inline'>{Math.round(this.state.EURGBP.price * 1000) / 1000}</div>
                        {this.state.EURGBP.change>0?<div className='crypto-item text-green bold inline'> +{Math.round(this.state.EURGBP.changesPercentage* 1000) / 1000 }%</div>
                        :<div className='crypto-item text-red bold inline'> { Math.round(this.state.EURGBP.changesPercentage * 1000) / 1000}%</div>
                        }
                        
                    </div>
                    <div className='crypto-box'>
                        <div className='crypto-item forex-head inline'>{this.state.USDCAD.name}</div>
                        
                        <div className='crypto-item inline'>{Math.round(this.state.USDCAD.price * 1000) / 1000}</div>
                        {this.state.USDCAD.change>0?<div className='crypto-item text-green bold inline'> +{Math.round(this.state.USDCAD.changesPercentage* 1000) / 1000 }%</div>
                        :<div className='crypto-item text-red bold inline'> { Math.round(this.state.USDCAD.changesPercentage * 1000) / 1000}%</div>
                        }
                        
                    </div>
                
            </div>
        )}
        else return(<div></div>)
    }
}
