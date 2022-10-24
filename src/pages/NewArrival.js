import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const NewArrival = ({ content }) => {
    return (
        <section className='New psc'>
            <figure>
                <h2>{content[0].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[0].title}</span>
                </div>
            </div>
        </section>
    )
}

export default NewArrival;
