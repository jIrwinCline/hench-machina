import React, { Component } from 'react';

export default class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      newsCompany: [],
      images: [],
      links: [],
    }
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=portland AND police AND +oregon&qInTitle=security+oregon&sortBy=relevancy&apiKey=c01b396611cf4e409b316a61faf3b6c4').then(results => {
      return results.json();
    }).then(data => {
      let newsArticles = data.articles.slice(0,3)
      console.log("here are my news articles!:::", newsArticles)
      let titles = newsArticles.map((article) => {
        console.log(article.title)
        return article.title
      })
      let newsCompany = newsArticles.map((article) => {
        console.log(article.source["name"])
        return article.source["name"]
      })
      let images = newsArticles.map((article) => {
        console.log(article.source["name"])
        return article.urlToImage
      })
      let links = newsArticles.map((article) => {
        console.log(article.source["name"])
        return article.url
      })
    const newState = Object.assign({}, this.state, { titles: titles, newsCompany: newsCompany, images: images, links: links})
    this.setState(newState)
    })
  }
  render() {
    let cardReturn = (i) => {
      console.log("ITERATE ",i)
      return(
        <div className="col-md-4">
            <div className="card news-card-style text-decoration">
              <div className="header" >{this.state.newsCompany[i]}</div>
              
              <div className="img-top">
          <a href={this.state.links[i]}>
              <img src={this.state.images[i]} alt="Security Guy"/>
          </a>
              </div>
              <div className="card-body">
              <div className="card-title">{this.state.titles[i]}</div>
                
              </div>
            </div>
        </div>
      )
    }
    return (
      <div className="container-fluid news-container">
        <div className="row">
          {cardReturn(0)}
          {cardReturn(1)}
          {cardReturn(2)}
        </div>
      </div>
    )
  }
};