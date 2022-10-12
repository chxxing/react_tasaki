import { Link } from 'react-router-dom';
import { MENUDATA } from '../data/common';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { useRef } from 'react';

const Discover = () => {
    const Dsc = useRef(null);
    return (
        <section className="Discover sec">
            <h2>DISCOVER</h2>
            <div className="inner">
                <Slider
                    className={'DscSlider'}
                    ref={Dsc}
                    arrows={false}
                    dots={true}
                    slidesToShow={2}
                >
                    {
                        MENUDATA.slice(0, 5).map((it, idx) => {
                            return (
                                <Link to={it.link} key={it.id}>
                                    <figure className={`itm itm0${idx + 1}`}>
                                        <div className="tit">
                                            <p>{it.title}</p>
                                        </div>
                                    </figure>
                                </Link>
                            )
                        })
                    }
                </Slider>
                <div>
                    <BsChevronLeft onClick={() => Dsc.current.slickPrev()} className="arrow" />
                    <BsChevronRight onClick={() => Dsc.current.slickNext()} className="arrow" />
                </div>
            </div>
        </section >
    )
}

export default Discover;
