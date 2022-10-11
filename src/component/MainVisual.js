import { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/MainVisual.scss';

const MAINSLIDER = [
    { id: 1, title: "TASAKI Atelier <Radiant>", des: "마법처럼 매혹적인 블루 터콰이즈를 통해 눈부신 아름다움,\n순수하고 맑은 파란빛을 통해 시시각각 변하는 구름의 신비로운 모습을 재해석하였다.", link: "/" },
    { id: 2, title: "TASAKI Danger", des: "날렵한 가시와 송곳니 디테일로 식충 식물, 전갈, 상어와 같은\n위험한 생명체 속에 숨겨진 신비롭고 아름다운 매력을 담아냈습니다.\n다이아몬드가 세팅된 화려한 디자인으로 탄생한\n신비로운 세계 속 숨겨진 데인저의 매력을 직접 경험해 보세요.", link: "/" },
    { id: 3, title: "TASAKI Bridal", des: "TASAKI의 브라이덜 링 주얼리는\n최고의 품질과 뛰어난 장인 정신을 자랑하며 순수한 다이아몬드의 광택으로\n당신과 당신의 파트너의 영원한 사랑과 기쁨을 축복합니다.", link: "/" },
]

const MainVisual = () => {
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
                    MAINSLIDER.map((slide, idx) => {
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

export default MainVisual
