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
    const newState = Object.assign({}, this.state, { titles: titles, newsCompany: newsCompany, images: null, links: null})
    this.setState(newState)
    })
  }
  render() {
    let cardReturn = function(){
      for(let i=0;i<3;i++){
        return(
          <div className="col-md-4">
            <div className="card news-card-style">
              <div className="header" >content</div>
              <div className="img-top"><img src="https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/guards4-900px.jpg?height=168&t=1472047046&width=275" alt="Security Guy"/></div>
              <div className="card-title">{this.state.titles[i]}</div>
              <div className="card-body">
                <div className="card-text">content</div>
              </div>
            </div>
          </div>
        )
      }
    }
    return (
      <div className="container-fluid news-container">
        <div className="row">
          <div className="col-md-4">
            <div className="card news-card-style">
              <div className="header" >content</div>
                <div className="img-top"><img src="https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/guards4-900px.jpg?height=168&t=1472047046&width=275" alt="Security Guy"/></div>
                <div className="card-title">{this.state.titles[0]}</div>
              <div className="card-body">
                <div className="card-text">content</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card news-card-style">
              <div className="header">content</div>
                <div className="img-top"><img src="https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/guards4-900px.jpg?height=168&t=1472047046&width=275" alt="Security Guy"/></div>
                <div className="card-title">content</div>
              <div className="card-body">
                <div className="card-text">content</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card news-card-style">
              <div className="header">content</div>
                <div className="img-top"><img src="https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/guards4-900px.jpg?height=168&t=1472047046&width=275" alt="Security Guy"/></div>
                <div className="card-title">content</div>
              <div className="card-body">
                <div className="card-text">content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};