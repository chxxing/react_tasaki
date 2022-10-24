import MainVisual from "../component/MainVisual";
import Discover from "../component/Discover";
import About from '../component/About';
import News from "../component/News";

const Main = ({ content, slidetxt, news }) => {
    return (
        <main>
            <MainVisual slidetxt={slidetxt} />
            <Discover />
            <About content={content} />
            <News news={news} />
        </main>
    )
}

export default Main;
