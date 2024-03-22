import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer.tsx';
import NuestrosPlatos from './components/NuestrosPlatos/Platos.tsx';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.tsx';
import Faqs from './components/FAQ\'S/Faqs.tsx';
import Funciona from './components/ComoFunciona/Funciona.tsx';
import  {useDispatch, useSelector} from 'react-redux'
import {StoreState } from './redux/reducer/Reducer.tsx';
import { useEffect, useState } from 'react';
import { getFood } from './redux/actions/Actions.tsx';
import { Dispatch } from 'redux';
import axios from 'axios'
import Detail from './components/Detail/Detail.tsx';
import Login from './components/Login/Login.tsx';
import { useLocation } from 'react-router-dom';








function App() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  


  const dispatch = useDispatch<Dispatch>();
  
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:3000/api/food/`);
        if (data) {
          dispatch(getFood(data))
        } else {
          alert('There are no characters with this ID!');
        }
      } catch (error : any) {
        alert(error.message);
      }
    };
      fetchData2();
  }, []);

  const foodState = useSelector((state: StoreState) => state.platos);
  console.log(foodState);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div>
       <NavBar onItemClick={() => {}} toggleMenu={toggleMenu} showMenu={showMenu}/>
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
