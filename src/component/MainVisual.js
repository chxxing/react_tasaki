import { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/MainVisual.scss';

const MainVisual = ({ slidetxt }) => {
    const [slideNum, setSlideNum] = useState(0);
    const MAIN = useRef(null);
    const setting = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    return (
        <section className='MainVisual'>
            <Slider {...setting}
                afterChange={index => setSlideNum(index)}
                ref={MAIN}
            >
                {
                    slidetxt.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id}>
                                <div className="inner">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.des}</p>
                                    <Link to={slide.link} className='more'>more <BsChevronRight className='icon' /></Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className='arrows'>
                <BsChevronLeft onClick={() => MAIN.current.slickPrev()} className="arrow" />
                <BsChevronRight onClick={() => MAIN.current.slickNext()} className="arrow" />
            </div>
        </section >
    )
}

export default MainVisual;
