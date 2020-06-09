import React, { Component } from "react";
import PropTypes from "prop-types";
import StockPrices from './home/StockPrices';
import './style.css'
function a(){
    fetch("https://financialmodelingprep.com/api/v3/company/profile/AAPL")
  .then(response => response.json())
  .then((data) => {
    document.getElementById("result").innerHTML = data.symbol+' price '+data.profile.price;
    console.log(data);
  })
}
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2,
          width:500
          

      }}
  />
);
class Navbar extends Component {
    constructor() {
        super();
        this.state = {stock:[]};
      }
      
    componentDidMount() {
      // setInterval(()=>{ 
      //   fetch('https://financialmodelingprep.com/api/v3/stock/real-time-price/aapl')
      //   .then(response =>  response.json())
      //   .then(resData => {
      //      //console.log(JSON.stringify(resData))
      //      //do your logic here       
      //      //let person = resData.results
      //      this.setState({ stock: resData }); //this is an asynchronous function
      //   })
      //  }, 500);
        
    }
    render() {
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

        <div className='header'>
        <div className='navbar'>
          
          <div className='brand-name'>
          <a className='brand-name' href='#'>Stocker</a>
          </div>
          <div className="navbar-text">
            <ul className='navbar-list'>
              <li className='navbar-li'><a className='navbar-a' href='#'>Search</a></li>
              <li className='navbar-li'><a className='navbar-a' href='#'>Contests</a></li>
              <li className='navbar-li'><a className='navbar-a' href='#'>Simulate</a></li>
              <li className='navbar-li'><a className='navbar-a' href='#'>Profile</a></li>
            </ul>
               
          </div>  
         
          </div>
           
      </div>
        )
    }
}
export default Navbar;