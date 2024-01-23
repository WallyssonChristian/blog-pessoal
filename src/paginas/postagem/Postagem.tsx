import React from 'react'

function Postagem() {

  return (
    <>


      <div id='container-postagem' className='w-4/6 mx-auto my-10 rounded-3xl bg-slate-800'>

        {/* Postagem card */}
        <div className='w-full  place-items-center space-y-4 px-10 py-10'>
          {/* Titulo*/}
          <div className='w-full flex flex-col'>
            <label className='font-bold ml-2 text-white'>Titulo</label>
            <input type='text'
              id='titulo'
              name='titulo'
              placeholder='Titulo'
              className='rounded p-2' />
          </div>
          {/* Tema */}
          <div className='w-full flex flex-col'>
            <label className='font-bold ml-2 text-white'>Tema</label>
            <input type='email'
              id='tema'
              name='tema'
              className='rounded p-2' />
          </div>
          {/* Telefone */}

          {/* Descrição */}
          <div className='w-full flex flex-col'>
            <label className='font-bold ml-2 text-white'>Post</label>
            <input type='text'
              id='descricao'
              name='descricao'
              placeholder='Escreva sua postagem.'
              className='rounded p-2 h-32' />
          </div>
          {/* Enviar */}
          <div className='flex flex-row space-x-4 justify-end'>
            <button className='rounded border-solid border-2 px-4 py-2 font-bold bg-lime-500 hover:bg-lime-800 text-white'>Cadastrar</button>
            <button type='submit' className='rounded border-solid border-2 px-4 py-2 font-bold bg-red-500 hover:bg-red-800 text-white'>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Postagem