import React, {useEffect, useState} from "react";
import axios from 'axios';

interface Article {
    slug: string;
    title: string;
    description: string;
    createdAt: Date;
    author: {
        username: string;
        image: string;
    },
    favoritesCount: number;
}


function Home() {
    const [tags, setTags] = useState<Array<string>>([]);
    const [articles, setArticles] = useState<Array<Article>>([]);
    const [articlesCount, setArticlesCount] = useState(0);
    const [selectedTag, setSelectedTag] = useState<string| null>(null);

    function loadArticlesByTag(tag: string) {
        axios.get(`https://realworld-temp-api.herokuapp.com/api/articles?tag=${tag}`).then(r => {
            setArticles(r.data.articles)
        });
    }

    useEffect(() => {
        axios.get('https://realworld-temp-api.herokuapp.com/api/tags').then(r => {
            setTags(r.data.tags)
        });
    }, []);

    useEffect(() => {
        axios.get('https://realworld-temp-api.herokuapp.com/api/articles').then(r => {
            setArticles(r.data.articles)
        });
    }, []);

    return (
        <div className="home-page">

            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>

            <div className="container page">
                <div className="row">

                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="">Your Feed</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">Global Feed</a>
                                </li>
                                {selectedTag ? (
                                    <li className="nav-item">
                                        <a className="nav-link active" href="">#{selectedTag}</a>
                                    </li>
                                ): ''}
                            </ul>
                        </div>
                        {articles.map(article => (
                            <div className="article-preview" key={article.slug}>
                                <div className="article-meta">
                                    <a href="profile.html"><img src={article.author.image}/></a>
                                    <div className="info">
                                        <a href="" className="author">{article.author.username}</a>
                                        <span className="date">{article.createdAt}</span>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                        <i className="ion-heart"></i>{article.favoritesCount}
                                    </button>
                                </div>
                                <a href="" className="preview-link">
                                    <h1>{article.title}</h1>
                                    <p>{article.description}</p>
                                    <span>Read more...</span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>

                            <div className="tag-list">
                                {tags.map(tag => (<a key={tag} href="" className="tag-pill tag-default" onClick={(e) => {e.preventDefault(); setSelectedTag(tag); loadArticlesByTag(tag)}}>{tag}</a>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
