import { Route, Routes } from 'react-router-dom';
import { MENUDATA } from './data/common';
import Header from './component/Header';
import Main from './pages/Main';
import Footer from './component/Footer';
import './css/Main.scss';
import NewArrival from './pages/NewArrival';
import Jewellery from './pages/Jewellery';
import Stores from './pages/Stores';
import NewsList from './pages/NewsList';
import Company from './pages/Company';
import Others from './pages/Others';
import Timepieces from './pages/Timepieces';
import Bridal from './pages/Bridal';
import Board from './pages/Board';

const App = () => {
  return (
    <div className="Wrapper">
      <Header content={MENUDATA} />
      <Routes>
        <Route path='/' element={<Main content={MENUDATA} />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/jewellery' element={<Jewellery />} />
        <Route path='/bridal' element={<Bridal />} />
        <Route path='/timepieces' element={<Timepieces />} />
        <Route path='/others' element={<Others />} />
        <Route path='/about' element={<Company />} />
        <Route path='/news' element={<NewsList />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/board' element={<Board />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
