import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Board = () => {
    return (
        <section className='Board psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight /> Board</span>
                </div>
            </div>
        </section>
    )
}

export default Board
