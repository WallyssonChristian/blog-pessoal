function Home() {
    return (
        <>
            {/* Background */}
            <div id="container" className='flex justify-center bg-indigo-900'>

                {/* Container */}
                <div id="subcontainer" className=' grid grid-cols-2 container text-white'>

                    {/* Grid Left Side */}
                    <div id="texto" className='flex flex-col gap-4 items-center justify-center py-4'>

                        <h2 className="text-5x1 font-bold">Seja Bem Vindo!</h2>
                        <p className="text-x1">Lugar para desabafar!</p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-white border-solid border-2 px-4 py-2">
                                Postagem
                            </div>
                        </div>
                    </div>

                    {/* Grid Right Side */}
                    <div id="imagem" className="flex justify-center">
                        <img src='https://i.imgur.com/VpwApCU.png' alt="Imagem da página home" className="w-2/3"></img>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;