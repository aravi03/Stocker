import React, { Component } from 'react'
function sortByAttribute(array, ...attrs) {
    // generate an array of predicate-objects contains
    // property getter, and descending indicator
    let predicates = attrs.map(pred => {
      let descending = pred.charAt(0) === '-' ? -1 : 1;
      pred = pred.replace(/^-/, '');
      return {
        getter: o => o[pred],
        descend: descending
      };
    });
    // schwartzian transform idiom implementation. aka: "decorate-sort-undecorate"
    return array.map(item => {
      return {
        src: item,
        compareValues: predicates.map(predicate => predicate.getter(item))
      };
    })
    .sort((o1, o2) => {
      let i = -1, result = 0;
      while (++i < predicates.length) {
        if (o1.compareValues[i] < o2.compareValues[i]) result = -1;
        if (o1.compareValues[i] > o2.compareValues[i]) result = 1;
        if (result *= predicates[i].descend) break;
      }
      return result;
    })
    .map(item => item.src);
  }
export default class StockPrices extends Component {
    constructor(){
        super();
        this.state={stocks:[],fetch_check:false}
    }
    componentWillMount(){
        // setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/quote/AAPL,ADBE,ADI,ADP,ADSK,ALGN,ALXN,AMAT,AMD,AMGN,AMZN,ANSS,ASML,ATVI,AVGO,BIDU,BIIB,BKNG,BMRN,CDNS,CDW,CERN,CHKP,CHTR,CMCSA,COST,CPRT,CSCO,CSGP,CSX,CTAS,CTSH,CTXS,DLTR,DXCM,EA,EBAY,EXC,EXPE,FAST,FB,FISV,FOX,FOXA,GILD,GOOG,,GOOGL,IDXX,ILMN,INCY,INTC,INTU,ISRG,JD,KHC,KLAC,LBTYA,LBTYK,LRCX,LULU,MAR,MCHP,MDLZ,MELI,MNST,MSFT,MU,MXIM,NFLX,NTAP,NTES,NVDA,NXPI,ORLY,PAYX,PCAR,PEP,PYPL,QCOM,REGN,ROST,SBUX,SGEN,SIRI,SNPS,SPLK,SWKS,TCOM,TMUS,TSLA,TTWO,TXN,UAL,ULTA,VRSK,VRSN,VRTX,WBA,WDAY,WDC,XEL,XLNX,ZM?apikey='+process.env.REACT_APP_SECRET_NAME)
        .then(response =>  response.json())
        .then(resData => {
            this.setState({stocks:sortByAttribute(resData, 'symbol'),fetch_check:true})
            console.log(this.state.stocks);
        })
    // },5000)
    }
    render() {
        // if(this.state.fetch_check){
        // return (
          
        //         this.state.stocks.map(stock=>{
        //             return(<div>
                       
        //                </div>
        //             )
        //         })
               
           

        // )}
        // else{
        //     return(<div></div>)
        // }
        return (
            this.state.stocks.map(stock=>{
                return(
                    <div className='stockprice-box inline'>
                        <div className='stockprice-item inline'>
                        {stock.symbol} &nbsp;
                        </div>
                        <div className='stockprice-item bold inline'>
                        ${stock.price} 
                        </div>
                 
                    {stock.change>0?<div className='stockprice-item text-green bold inline'> +{stock.change }</div>
                        :<div className='stockprice-item text-red bold inline'> { stock.change }</div>
                        }
                        {stock.change>0?<div className='stockprice-item text-green bold inline'> (+{stock.changesPercentage })</div>
                        :<div className='stockprice-item text-red bold inline'> ({ stock.changesPercentage })</div>
                        }
                    </div>
                    // <div className='crypto-box'>
                    //     <div className='crypto-item crypto-head'>{stock.ticker}</div>
                        
                    //     <div className='crypto-item inline'>{stock.price}&ensp;</div>
                    //     {stock.changes>0?<div className='crypto-item text-green bold'> +{stock.changes }</div>
                    //     :<div className='crypto-item text-red bold'> { stock.changes }</div>
                    //     }
                        
                    // </div>
                )
            })
        )
    }
}
