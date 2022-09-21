import Header from './component/Header';
import MainVisual from './component/MainVisual';
import './css/App.css';

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <main>
        <MainVisual />
      </main>
    </div>
  );
}

export default App;
