import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Discover from './component/Discover';
import Footer from './component/Footer';
import About from './component/About';
import './css/App.css';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <main>
        <MainVisual />
        <Discover />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
