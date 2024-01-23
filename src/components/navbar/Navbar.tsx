import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const {handleLogout} = useContext(AuthContext)

  function logout(){
    handleLogout();
    alert('O usuário foi desconectado com sucesso!')
    navigate('/login')
  }

  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center p-5'>

        <div className="container flex justify-between text-lg">

          <Link to='/home' className="text-2xl font-bold hover:text-blue-300">Blog Pessoal</Link>

          <div className="flex gap-4">
            <Link to='/postagem' className="hover:text-blue-300">Nova Postagem</Link>
            <Link to='/temas' className="hover:text-blue-300">Temas</Link>
            <Link to='/cadastrartema' className="hover:text-blue-300">Cadastrar Tema</Link>
            <Link to='' className="hover:text-blue-300">Perfil</Link>
            <Link to='' className="">Login</Link>
            <Link to='' onClick={logout} className="hover:text-red-300">Sair</Link>
          </div>

        </div>

      </div>
    </>

  )
}

export default Navbar