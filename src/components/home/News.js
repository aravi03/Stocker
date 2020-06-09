import React, { Component } from 'react'

export default class News extends Component {
    constructor(){
        super();
        this.state={news:[]}
    }
    componentWillMount(){
        
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=23ae0343bbc74510889b82b86d6362a6&category=business&pageSize=30')
        .then(response =>  response.json())
        .then(resData => {
            this.setState({news:resData.articles})
            console.log(resData.article);
        })
        
    }
    render() {
        var k=0;
        return (
            
            this.state.news.map(story=>{
                k++;
                const findFirst=()=>{
                    if(k==1) return 'first'
                    else return ''
                }
                const firstBG=()=>{
                    if(k==1)
                    return {backgroundImage:`url(${story.urlToImage})`}
                    else return {}
                }
                return(
                    <div className={'news-block '+findFirst()} style={firstBG()}>
                    <div>
                    <img className={'news-image '+findFirst()} src={story.urlToImage}/>   
                    </div>
                    <div className={'news-text '+findFirst()}>
                    <h2 className={'news-heading '+findFirst()}>{story.title}</h2>
                    <p className={'news-description '+findFirst()}>{story.description}</p>
                    </div>
                    </div>
                )

            })
        )
    }
}
