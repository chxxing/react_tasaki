import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Bridal = ({ content }) => {
    return (
        <section className='Bridal psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[2].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[2].title}</h2>
            </div>

        </section>
    )
}

export default Bridal
