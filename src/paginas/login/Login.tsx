import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading} = useContext(AuthContext)

    const [ usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if(usuario.token !== ""){
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    
    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                {/* Left part of site */}
                <div id='login' className="
                grid place-items-center font-bold w-full">
                    <form className="
                    flex justify-center place-items-center flex-col
                    gap-4"
                    onSubmit={login}>
                        <h2 className="
                        text-slate-900
                        text-5xl">Entrar</h2>

                        <div id='usuario' className='
                        flex flex-col w-full'>
                            <label htmlFor="usuario" />
                            <input
                                type='text'
                                id="usuario"
                                name="usuario"
                                placeholder="Usuário"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuarioLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>

                        <div id='senha' className="
                        flex flex-col w-full">
                            <label htmlFor="senha" />
                            <input
                                type='password'
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuarioLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>

                        <button type='submit' className='
                        rounded bg-indigo-400 hover:bg-indigo-900
                        text-white w-1/2 py-2 flex justify-center'>
                            Entrar
                        </button>

                        <hr className="border-slate-800 w-full" />
                        <p>Ainda não tem uma conta? <Link to='/Cadastro' className="">Cadastre-se</Link> </p>
                    </form>

                </div>


                {/* Right part of site */}
                <div id='imagem' className="grid place-items-center w-full lg:col-span-1">
                   < img src='https://ik.imagekit.io/Zabo/Blog-Pessoal/personagem-de-desenho-animado-de-ilustracao-vetorial-de-blogging_516790-1481.avif?updatedAt=1705578419077' alt='blog pessoal imagem'></img>
                </div>


            </div>
        </>

    )
}

export default Login