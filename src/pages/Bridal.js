import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Bridal = ({ content }) => {
    return (
        <section className='Bridal psc'>
            <figure>
                <h2>{content[2].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[2].title}</span>
                </div>
            </div>
        </section>
    )
}

export default Bridal
