import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Jewellery = ({ content }) => {
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

        </section>
    )
}

export default Jewellery;
