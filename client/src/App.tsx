import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Home from './components/Home/Home';
import NuestrosPlatos from './components/NuestrosPlatos/Platos.tsx';
import Funciona from './components/ComoFunciona/Funciona.tsx';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.tsx';
import Faqs from './components/FAQ\'S/Faqs.tsx';


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
          <Route path="/NuestrosPlatos" element={<NuestrosPlatos/>}/>
          <Route path="/Comofunciona" element={<Funciona/>}/>
          <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="/Faqs" element={<Faqs/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
