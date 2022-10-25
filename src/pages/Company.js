import { BsChevronRight } from "react-icons/bs";

const Company = ({ content, itm }) => {
    return (
        <section className='Company psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[3].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[3].title}</h2>
            </div>
            <div className="secPage">
                <div className="inner">
                    <p className="title01">Brand Message</p>
                    <div className="box">
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/images/about_img.jpg'} alt="" />
                        </figure>
                        <div className="desc">
                            <div className="desc01">
                                <span>우아하고 대담한 매력</span>
                                TASAKI는 진주와 다이아몬드로 창조한 모던하고 유니크한 세계를 선보입니다.<br />
                                뛰어난 품질과 세련된 장인 정신을 바탕으로 최고급 소재를 활용하여<br />경이로운 주얼리로 탄생한 TASAKI의 제품을 만나보세요.<br />
                                TASAKI의 혁신적이고 클래식한 예술 작품은 스타일, 돋보이는 자신감, 강렬한 광채를 선사합니다.<br />
                                늘 발전하는 하이 주얼러 TASAKI는 자연의 아름다움과 지속 가능성을 추구하는 문화에 헌신하는 기업입니다.
                            </div>
                            <div className="desc02">
                                <span>TASAKI의 퀄리티</span>
                                TASAKI의 퀄리티는 원석에서부터,<br />
                                TASAKI가 자랑하는 다이아몬드, 진주, 컬러스톤에 대하여 소개합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainPage">
                    <p className="title02">TASAKI Story</p>
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
            </div>
        </section>
    )
}

export default Company
