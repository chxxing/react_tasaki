import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import { MENUDATA } from './data/common';
import Header from './component/Header';
import Main from './pages/Main';
import Discover from './component/Discover';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <div className="Wrapper">
      <Header content={MENUDATA} />
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>
      </Routes>
      <Discover />
      <About />
      <Footer />
    </div>
  );
}

export default App;
