import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import StockPrices from './home/StockPrices';
import Gainers from './home/Gainers';
import Losers from './home/Losers';
import Indexes from './home/MajorIndex';
import News from './home/News';
import Cryptocurrency from './home/Cryptocurrency';
import Forex from './home/Forex';
import SectorPerformances from './home/SectorPerformances';
export default class Home extends Component {
        
    componentDidMount(){
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://some-scripturl.js";
       // For body
         document.body.appendChild(script);
    }
//         constructor()
// {
//     this.state={gainersReady:false,indexReady:false}
// }        
//     toogleGainer(){
//         this.gainersReady=true;
//     }
    //     componentDidMount(){
    //     // setInterval(()=>{ 
    //     fetch('https://financialmodelingprep.com/api/v3/stock/gainers')
    //     .then(response =>  response.json())
    //     .then(resData => {
    //        //console.log(JSON.stringify(resData))
    //        //do your logic here       
    //        //let person = resData.results
    //       //  this.setState({gainerStocks:resData.mostGainerStock}); //this is an asynchronous function
           
    //       //  console.log(this.state.gainerStocks);
    //     })
    //   //  }, 2000);
    // }
    render() {
        // const gainers = this.state.gainerStocks.map(stock => {
        //     return ( <Gainers stock={this.state.gainerStocks}/>
        //        )
        //   });
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5,
                    margin:0
                }}
            />
        );
        return (
            <div>
              <div className='running-stocks'>
             <marquee behavior="scroll" direction="left"><StockPrices/></marquee>
             </div>  
            <div className='home-stocks'>
            
            
               
               <Indexes/>
               
               </div>
               {/* <Gainers/> */}
               
               <Cryptocurrency/>
               
               <Forex/>
               <Gainers/>
               <Losers/>
               <SectorPerformances/>
               <div className='news-list inline'>
              <News/>
              </div>
              </div>
        )
    }
}
