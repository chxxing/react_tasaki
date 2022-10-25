import { BsChevronRight } from "react-icons/bs";

const Jewellery = ({ content, itmc, itm }) => {
    return (
        <section className='Jewellery psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[1].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[1].title}</h2>
            </div>
            <div className="secPage">
                <p className="title">Jewellery Collection</p>
                <div className="container">
                    {
                        itmc.map((it, idx) => {
                            return (
                                <figure key={it.id}>
                                    <a href="#!">
                                        <div className='box collection'>
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
            <div className="secPage">
                <p className="title">Jewellery Category</p>
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

export default Jewellery;
