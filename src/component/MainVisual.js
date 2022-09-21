import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const MAINSLIDER = [
    { id: 1, title: "", des: "" },
    { id: 2, title: "", des: "" },
    { id: 3, title: "", des: "" },
]

const MainVisual = () => {
    const setting = {
        arrows: false,
    };

    return (
        <section className='MainVisual'>
            <Slider {...setting}>
                {
                    MAINSLIDER.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id}>
                                <div className="container">
                                    <h2>{slide.title}</h2>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default MainVisual
