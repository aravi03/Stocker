import React, { Component } from 'react'

export default class CryptocurrencyDisplay extends Component {
    render() {
        return (
            this.props.crypto.map(cryptocurrency=>{
                return(
                    <div className='crypto-box'>
                        <div className='crypto-item crypto-head'>{cryptocurrency.ticker}</div>
                        
                        <div className='crypto-item inline'>{cryptocurrency.price}&ensp;</div>
                        {cryptocurrency.changes>0?<div className='crypto-item text-green bold'> +{cryptocurrency.changes }</div>
                        :<div className='crypto-item text-red bold'> { cryptocurrency.changes }</div>
                        }
                        
                    </div>
                )
            })
        )
    }
}
