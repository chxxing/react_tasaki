import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const NewArrival = ({ content, itm }) => {
    return (
        <section className='New psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[0].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[0].title}</h2>
            </div>
            <div className="mainPage">
                <div className="title">danger collection</div>
                <figure>
                    <a href="#!">
                        {
                            itm.map((it, idx) => {
                                return (
                                    <div className='box' key={it.id}>
                                        <img src={process.env.PUBLIC_URL + it.src} alt="" />
                                        <div className="name">{it.name}</div>
                                    </div>
                                )
                            })
                        }
                    </a>
                </figure>
            </div>
        </section>
    )
}

export default NewArrival;
