import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Cadastro from './paginas/cadastro/Cadastro.tsx';
import Home from './paginas/home/Home.tsx';
import Login from './paginas/login/Login.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;