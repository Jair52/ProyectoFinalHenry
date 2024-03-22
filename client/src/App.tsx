import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer.tsx';
import NuestrosPlatos from './components/NuestrosPlatos/Platos.tsx';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.tsx';
import Faqs from './components/FAQ\'S/Faqs.tsx';
import Funciona from './components/ComoFunciona/Funciona.tsx';
import Detail from './components/Detail/Detail.tsx';
import Login from './components/Login/Login.tsx';

function App() {

  return (
    <>
      <div>
        <NavBar onItemClick={()=>{}}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="*" />
          <Route path="/NuestrosPlatos" element={<NuestrosPlatos/>}/>
          <Route path="/Comofunciona" element={<Funciona/>}/>
          <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="/Faqs" element={<Faqs/>}/>
         <Route path="/Login" element={<Login handleSubmit={function (): void {
            throw new Error('Function not implemented.');
          } }/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
