import React, { Component } from 'react'
import MajorIndexDisplay from './MajorIndexDisplay';

export default class MajorIndex extends Component {
    constructor()
    {   super();
        this.state={index:[],fetch_check:false,slide:1};
     }
     componentWillMount(){
        setInterval(()=>{ 
        fetch('https://financialmodelingprep.com/api/v3/majors-indexes')
        .then(response =>  response.json())
        .then(resData => {
         this.setState({index:resData.majorIndexesList,fetch_check:true});
        //this is an asynchronous function
          })
       }, 5000);
    
    }
    render() {
      const plusSlides=(n)=> {
           
         if(this.state.slide+n>3) this.setState({slide:1})
         else if(this.state.slide+n<1) this.setState({slide:3})
         else  this.setState({slide:this.state.slide+n});
         console.log("Current slide is "+this.state.slide);
       }
            if(this.state.fetch_check)
              return(
                <div className='major-index-list'>
                    <a class="prev " onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a class="next " onClick={() => plusSlides(1)}>&#10095;</a>
                {/* <h1 className='home-heading'>Major Indexes</h1> */}
               
                <div className='home-cards'>
                <MajorIndexDisplay index={this.state.index} slide={this.state.slide}/>
                </div>
                </div>
           
           ) 
           else{
                return(<div></div>)
           } 
           
    }
}
