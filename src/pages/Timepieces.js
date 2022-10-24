import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Timepieces = ({ content }) => {
    return (
        <section className='Time psc'>
            <figure>
                <h2>{content[3].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[3].title}</span>
                </div>
            </div>
        </section>
    )
}

export default Timepieces
