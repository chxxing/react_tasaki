import { Link } from "react-router-dom";

const NEWS = [
    { id: 1, title: "TASAKI 새로운 글로벌 광고 캠페인", date: "2022.06.23", link: "/news" },
    { id: 2, title: "TASAKI, 모나코 호텔 드 파리 몬테카를로에 1호점 오픈", date: "2021.06.01", link: "/news" },
    { id: 3, title: "모조품에 관한 당사의 입장", date: "2018.05.09", link: "/news" }
]

const News = () => {
    return (
        <section className='News sec'>
            <h2>NEWS</h2>
            <div className="container">
                {
                    NEWS.map(it => {
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
