import { useRef, useState } from 'react';
import SubSlider from 'react-slick';
import "slick-carousel/slick/slick.css";

const PRODUCT = [
    { id: 1, title: "M/G TASAKI", link: "#!" },
    { id: 2, title: "BRIDAL", link: "#!" },
    { id: 3, title: "TASAKI Atelier", link: "#!" },
    { id: 4, title: "TIMEPIECES", link: "#!" },
    { id: 5, title: "ARMORY", link: "#!" },
    { id: 6, title: "BALANCE", link: "#!" }
]

const Discover = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    return (
        <section className="Discover">
            <div className="container">
                <h2>DISCOVER</h2>
                <SubSlider className={'SubSlider'}
                    centerMode={true}
                    centerPadding={'80px'}
                    afterChange={index => setSlideNum(index)}
                    arrows={false}
                    slidesToShow={2}
                    slidesToScroll={1}
                    ref={SLIDE}
                >
                    {
                        PRODUCT.map((con, idx) => {
                            return (
                                <figuer key={con.id}>
                                    <a href={con.link}>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/discover0" + con.id + ".jpg"} alt="" />
                                    </a>
                                    <div className="tit">
                                        <a href={con.link}>
                                            <p>{con.title}<i className="bi-chevron-right"></i></p>
                                        </a>
                                    </div>
                                </figuer>
                            )
                        })
                    }
                </SubSlider>
                {/* <div className="box">
                    <div className="tit">{PRODUCT[slideNum].title}</div>
                    <a href={PRODUCT[slideNum].link}>more <i className="bi-chevron-right"></i></a>
                </div> */}
                <ul className="dots">
                    {
                        PRODUCT.map((dot, idx) => <li
                            key={dot.id}
                            onClick={() => SLIDE.current.slickGoTo(idx)}
                            className={slideNum === idx ? 'on' : ''}>
                            {dot.id}</li>)
                    }
                </ul>
            </div>
        </section >
    )
}

export default Discover;
