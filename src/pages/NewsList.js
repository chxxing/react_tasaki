import { BsChevronRight } from "react-icons/bs";

const NewsList = ({ content, itm }) => {
    return (
        <section className='Newslist psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[4].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[4].title}</h2>
            </div>
            <div className="secPage">
                <p className="title">News</p>
                <div className="container">
                    {
                        itm.map((it, idx) => {
                            return (
                                <figure key={it.id}>
                                    <a href="#!">
                                        <div className='box'>
                                            <img src={process.env.PUBLIC_URL + "/assets/images/news0" + it.id + ".jpg"} alt="" />
                                        </div>
                                        <span>{it.date}</span>
                                        <div className="name">{it.title}</div>

                                    </a>
                                </figure>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewsList;
