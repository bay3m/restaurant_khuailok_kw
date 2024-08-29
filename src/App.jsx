import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MenuList from './components/MenuList.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <MenuList />
            <Footer />
          </>
        } />
        
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
};

export default App