import MainVisual from "../component/MainVisual";
import Discover from "../component/Discover";
import About from '../component/About';
import News from "../component/News";

const Main = ({ content }) => {
    return (
        <main>
            <MainVisual />
            <Discover />
            <About content={content} />
            <News />
        </main>
    )
}

export default Main;
