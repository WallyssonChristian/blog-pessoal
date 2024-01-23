import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import Cadastro from './paginas/cadastro/Cadastro.tsx';
import Home from './paginas/home/Home.tsx';
import Login from './paginas/login/Login.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import Postagem from './paginas/postagem/Postagem.tsx';
import ListaTemas from './components/temas/listaTemas/ListaTemas.tsx';
import FormularioTema from './components/temas/formularioTema/FormularioTema.tsx';
import DeletarTema from './components/temas/deletarTemas/DeletarTema.tsx';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/postagem' element={<Postagem />} />
              <Route path='/temas' element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;