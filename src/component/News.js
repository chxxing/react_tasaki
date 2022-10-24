import { Link } from "react-router-dom";

const News = ({ news }) => {
    return (
        <section className='News sec'>
            <h2>NEWS</h2>
            <div className="container">
                {
                    news.map(it => {
                        return (
                            <figure>
                                <Link to={it.link}>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/news0" + it.id + ".jpg"} alt="" />
                                    <span>{it.date}</span>
                                    <div className="tit">{it.title}</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default News;
