import React, { Component } from 'react'

export default class SectorPerformancesDisplay extends Component {
    render() {
        return (
            this.props.sectors.map(sector=>{
                return(
                    <div className='sector-box'>
                        <div className='crypto-item crypto-head'>{sector.sector}</div>
                        
                       
                        {sector.changesPercentage[0]!='-'?<div className='crypto-item sector-space text-green bold'> +{sector.changesPercentage.slice(0, 4) }%</div>
                        :<div className='crypto-item sector-space text-red bold'> { sector.changesPercentage.slice(0, 4) }%</div>
                        }
                        
                    </div>
                )
            })
        )
    }
}
