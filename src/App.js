import { Route, Routes } from 'react-router-dom';
import { MENUDATA, MAINSLIDER, FOOTER, SNS } from './data/common';
import { STORES, NEWARRIVAL, BRIDAL, JEWELLERYCLT, JEWELLERY, COMPANY, NEWS } from './data/pages';
import Header from './component/Header';
import Main from './pages/Main';
import Footer from './component/Footer';
import './css/Main.scss';
import './css/Pages.scss';
import NewArrival from './pages/NewArrival';
import Jewellery from './pages/Jewellery';
import Stores from './pages/Stores';
import NewsList from './pages/NewsList';
import Company from './pages/Company';
import Bridal from './pages/Bridal';

const App = () => {
  return (
    <div className="Wrapper">
      <Header content={MENUDATA} />
      <Routes>
        <Route path='/' element={<Main slidetxt={MAINSLIDER} content={MENUDATA} news={NEWS} />} />
        <Route path='/newarrival' element={<NewArrival content={MENUDATA} itm={NEWARRIVAL} />} />
        <Route path='/jewellery' element={<Jewellery content={MENUDATA} itmc={JEWELLERYCLT} itm={JEWELLERY} />} />
        <Route path='/bridal' element={<Bridal content={MENUDATA} itm={BRIDAL} />} />
        <Route path='/about' element={<Company content={MENUDATA} itm={COMPANY} />} />
        <Route path='/news' element={<NewsList content={MENUDATA} itm={NEWS} />} />
        <Route path='/stores' element={<Stores content={MENUDATA} store={STORES} />} />
      </Routes>
      <Footer content={FOOTER} sns={SNS} />
    </div>
  );
}

export default App;
