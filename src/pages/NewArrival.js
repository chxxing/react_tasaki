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
            <div className="secPage">
                <p className="title">Danger Collection</p>
                <div className="container">
                    {
                        itm.map((it, idx) => {
                            return (
                                <figure key={it.id}>
                                    <a href="#!">
                                        <div className='box'>
                                            <img src={process.env.PUBLIC_URL + it.src} alt="" />
                                        </div>
                                        <div className="name">{it.name}</div>
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

export default NewArrival;
