import './App.css';
import Header from './Component/Header';
import MainContent from './Component/MainContent';
import Detail from './Component/Detail';
import Footer from './Component/Footer';
import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { state } = useLocation();
  const { targetId } = state || {};
  useEffect(() => {
      const el = document.getElementById(targetId);
      if (el) {
      el.scrollIntoView();
      }
  }, [targetId]);
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Detail/:cardDetail" element={<Detail />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
