import { Route, Routes } from 'react-router-dom';
import { MENUDATA, MAINSLIDER, NEWS, FOOTER, SNS } from './data/common';
import { STORES } from './data/pages';
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
        <Route path='/' element={<Main slidetxt={MAINSLIDER} content={MENUDATA} news={NEWS} />} />
        <Route path='/newarrival' element={<NewArrival content={MENUDATA} />} />
        <Route path='/jewellery' element={<Jewellery content={MENUDATA} />} />
        <Route path='/bridal' element={<Bridal content={MENUDATA} />} />
        <Route path='/timepieces' element={<Timepieces content={MENUDATA} />} />
        <Route path='/others' element={<Others content={MENUDATA} />} />
        <Route path='/about' element={<Company content={MENUDATA} />} />
        <Route path='/news' element={<NewsList content={MENUDATA} />} />
        <Route path='/stores' element={<Stores content={MENUDATA} store={STORES} />} />
        <Route path='/board' element={<Board />} />
      </Routes>
      <Footer content={FOOTER} sns={SNS} />
    </div>
  );
}

export default App;
