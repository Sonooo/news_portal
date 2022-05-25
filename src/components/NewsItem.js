import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        const { title, description, imgUrl, newsUrl } = this.props;

        return (
            <div className="card" >
                <img src={imgUrl} className="card-img-top thumbnail" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description}</p>

                </div>
                <a href={newsUrl} className="btn btn-block btn-primary">Go somewhere</a>
            </div>

        )
    }
}

export default NewsItem
