import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Organisms/Footer';
import Header from './components/Organisms/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
