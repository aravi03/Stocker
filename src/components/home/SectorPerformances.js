import React, { Component } from 'react'
import SectorPerformancesDisplay from './SectorPerformancesDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class SectorPerformances extends Component {
    constructor(){
        super();
        this.state={sectors:[],fetch_check:false}
    }
    componentWillMount(){
        // setInterval(()=>{ 
        fetch(`https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${process.env.REACT_APP_SECRET_NAME}`)
        .then(response =>  response.json())
        .then(resData => {
            this.setState({sectors:resData.sectorPerformance,fetch_check:true})
            
        })
    // },5000)
    }
    render() {
        if(this.state.fetch_check)
        return (
            <div className='sector-list inline'>
                   <div className='crypto-title'><a  href=''>Sector Growth&emsp;<FontAwesomeIcon icon={faArrowRight} /></a></div>
                   
            <SectorPerformancesDisplay sectors={this.state.sectors}/>
            </div>
        )
        else
        return(<div></div>)
    }
}
