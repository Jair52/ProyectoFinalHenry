import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer.tsx';

function App() {

  return (
    <>
      <div>
        <NavBar onItemClick={()=>{}}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" />
          <Route path="/detail/:id" />
          <Route path="*" />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;

