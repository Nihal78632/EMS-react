
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './COMPONENTS/Header';
import Home from './PAGES/Home';
import Register from './PAGES/Register';
import View from './PAGES/View';
import Edit from './PAGES/Edit';
import Npf from './PAGES/Npf';
import Footer from './COMPONENTS/Footer';

function App() {
  return (
    <>
    
    <Header/>

    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/view/:id'} element={<View/>}/>
      <Route path={'/edit/:id'} element={<Edit/>}/>
      <Route path={'*'} element={<Npf/>}/>


    </Routes>

    <Footer/>

      
       
    </>
  );
}

export default App;
