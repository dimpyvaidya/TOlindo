import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import './BlogPage.css'
import iconDate from '../../../assets/images/ic_date.svg'
import { MainFooter } from '../MainFooter'
import blogData from './blogData.json'
import Moment from 'react-moment'

export class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.headerData = {
            title: 'Blog',
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
        this.props.history.push({
            pathname: `/blog/${this.getDateString(blogData[index].date)}`,
            state: {
                index,
            },
        })
    }
    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                <ul className="blog-list">
                    {blogData.map((item, index) => {
                        return (
                            <li
                                className="blog-list-item"
                                onClick={(e) =>
                                    this.handleArticleClick(index, e)
                                }
                                key={index}
                            >
                                <figure
                                    className="blog-list-item-image"
                                    style={{
                                        backgroundImage: `url('/blog_images/blog_20210520.png')`,
                                    }}
                                ></figure>
                                <h1 className="blog-list-item-title">
                                    {item.title}
                                </h1>
                                <h2 className="blog-list-item-subtitle">
                                    {item.subtitle}
                                </h2>
                                <div className="blog-list-item-date">
                                    <img src={iconDate} alt="" />
                                    <span className="blog-list-item-date-text">
                                        <Moment format="MMM D, YYYY">{`${item.date.year}-${item.date.month}-${item.date.day}`}</Moment>
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <MainFooter />
            </div>
        )
    }
}
