import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Organisms/Footer';
import Header from './components/Organisms/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Add from './components/Pages/Add';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add" element={<Add />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
