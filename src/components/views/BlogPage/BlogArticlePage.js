import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import './BlogArticlePage.css'
import iconDate from '../../../assets/images/ic_date.svg'
import { MainFooter } from '../MainFooter'
import blogData from './blogData.json'
import Moment from 'react-moment'

export class BlogArticlePage extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        // console.log('id:', this.props.match.params.id)
        // console.log('index:', this.props.location.state.index)
        this.articleIndex = this.props.location.state.index
        // this.articleId = this.props.match.params.id
        this.article = blogData[this.articleIndex]
        this.headerData = {
            title: this.article.title,
            menuNavs: {
                group: {
                    title: 'Home',
                    url: 'home',
                },
                current: {
                    title: 'Blog',
                    url: 'blog',
                },
            },
        }
    }
    getDateString(date) {
        return `${date.year}-${date.month}-${date.day}`
    }
    handleArticleClick(index, e) {
        this.props.history.push(
            `/blog/${this.getDateString(blogData[index].date)}`
        )
    }
    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                <div className="blog-article-page">
                    <div className="blog-article-page-date">
                        <img src={iconDate} alt="" />
                        <span className="blog-article-page-date-text">
                            <Moment format="DD/MM/YYYY">{`${this.article.date.year}-${this.article.date.month}-${this.article.date.day}`}</Moment>
                        </span>
                    </div>
                    <h1 className="blog-article-page-title">
                        {this.article.title}
                    </h1>
                    <h2 className="blog-article-page-subtitle">
                        {this.article.subtitle}
                    </h2>
                    <h3 className="blog-article-page-writer">{`${this.article.writer.firstName} ${this.article.writer.lastName}, ${this.article.writer.belongTo}`}</h3>
                    <figure
                        className="blog-article-page-image"
                        style={{
                            backgroundImage: `url('/blog_images/blog_20210520.png')`,
                        }}
                    ></figure>
                    <div
                        className="blog-article-content"
                        dangerouslySetInnerHTML={{
                            __html: this.article.content,
                        }}
                    ></div>
                </div>
                <MainFooter />
            </div>
        )
    }
}
