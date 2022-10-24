import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Jewellery = ({ content }) => {
    return (
        <section className='Jewellery psc'>
            <figure>
                <h2>{content[1].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[1].title}</span>
                </div>
            </div>
        </section>
    )
}

export default Jewellery;
