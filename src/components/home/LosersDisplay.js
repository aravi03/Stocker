import React, { Component } from 'react'

export default class LosersDisplay extends Component {
    render() {
        return (
            this.props.stocks.map(stock=>{
                return(
                    <div className='crypto-box'>
                        <div className='crypto-item crypto-head'>{stock.ticker}</div>
                        
                        <div className='crypto-item inline'>{stock.price}&ensp;</div>
                        {stock.changes>0?<div className='crypto-item text-green bold'> +{stock.changes }</div>
                        :<div className='crypto-item text-red bold'> { stock.changes }</div>
                        }
                        
                    </div>
                )
            })
        )
    }
}
