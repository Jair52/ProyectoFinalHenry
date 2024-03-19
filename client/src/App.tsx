import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/home" />
          <Route path="/form" />
          <Route path="/detail/:id" />
          <Route path="*" />
        </Routes>
      </div>
    </>
  );
}

export default App;

