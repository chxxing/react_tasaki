import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const About = ({ content }) => {
    return (
        <section className="About sec">
            <h2>{content[3].title}</h2>
            <div className="desc">우아하고 대담한 매력 TASAKI는 진주와 다이아몬드로 창조한 모던하고 유니크한 세계를 선보입니다.<br />
                뛰어난 품질과 세련된 장인 정신을 바탕으로 최고급 소재를 활용하여 경이로운 주얼리로 탄생한 TASAKI의 제품을 만나보세요.<br />
                TASAKI의 혁신적이고 클래식한 예술 작품은 스타일, 돋보이는 자신감, 강렬한 광채를 선사합니다.<br />
                늘 발전하는 하이 주얼리 TASAKI는 자연의 아름다움과 지속 가능성을 추구하는 문화에 헌신하는 기업입니다.</div>
            <Link to='/about' className="more">more <BsChevronRight className="icon" /></Link>
        </section >
    )
}

export default About;
