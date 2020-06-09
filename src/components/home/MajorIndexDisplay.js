import React, { Component } from 'react'

export default class MajorIndexDisplay extends Component {
    render() {
        var count=-1;
        return (
            this.props.index.map(stock=>{
                count++;
        var show_hide=()=>{
        if(count>=(this.props.slide-1)*5&&count<this.props.slide*5)
        return 'block';
        else
        return 'none';
        
       }
                return(
                    <div className={"stock-box "+show_hide()}>
                    
                    
                    <div className='stock-property inline'> { stock.indexName }</div>&ensp;
                    {/* <div className='stock-property inline'> ({ stock.ticker })</div> */}
                    <div className='index-body'>
                    <div className='stock-property inline' > ${stock.price }</div>
                    {stock.changes>0?<div className='stock-property inline text-green bold'> +{ stock.changes }</div>
                    :<div className='stock-property inline text-red bold'> { stock.changes }</div>
                     }
                    
                    </div>
    
                  </div>
               
    
                )
            })
        )
    }
}
