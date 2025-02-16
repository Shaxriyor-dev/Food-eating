import React from 'react'
import rus from "../assets/imgs/rus.png";
import {Link} from 'react-router'

function Signup() {
  return (
    <div className="h-screen bg-[#000a0f] flex justify-evenly items-center">
    <div className="text-white flex items-center gap-6">
      <a href="/">
        <img src={rus} alt="" />
      </a>
      <p className=" text-5xl font-[Roboto] font-bold">Crie sua conta</p>
    </div>
    <div className="text-white border bg-[#001119] w-[445px] p-3 py-9 rounded-2xl border-[#001119] flex justify-center items-center flex-col ">
      <p className="text-[32px] font-[Poppins] p-5 font-[500]">Faça login</p>
      <div class="relative w-[345px]">
        <p className="text text-[#C4C4CC] font-[Roboto] py-3">Seu nome : </p>
        <div class="absolute top-0 flex w-full justify-center">
          <div class="h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <input
          class="block h-12 w-full rounded-md border border-gray-800  bg-[#0D1D25] shadow-xl px-3 py-6 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50"
          placeholder="Exemplo: Maria da Silva"
        />
      </div>
      <div class="relative w-[345px]">
        <p className="text text-[#C4C4CC] font-[Roboto] py-3">Email : </p>
        <div class="absolute top-0 flex w-full justify-center">
          <div class="h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <input
          class="block h-12 w-full rounded-md border border-gray-800  bg-[#0D1D25] shadow-xl px-3 py-6 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
      </div>
      <div class="relative w-[345px]">
        <p className="text text-[#C4C4CC] font-[Roboto] py-3">Senha : </p>
        <div class="absolute top-0 flex w-full justify-center">
          <div class="h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <input
          class="block h-12 w-full rounded-md border border-gray-800  bg-[#0D1D25] shadow-xl px-3 py-6 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50"
          placeholder="No mínimo 6 caracteres"
        />
      </div>
      <div className="p-4 py-5 mt-7">
      <button  className="group/button relative w-[340px] inline-flex items-center justify-center overflow-hidden rounded-md  bg-red-500 px-4 p-3.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
        <span className="text-sm">Criar conta</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      </button>
      </div>
       <p className='text-[18px]'> Já tenho  <Link to={'/login'}  className='text-red-500'>uma conta</Link></p>
    </div>
  </div>
  )
}

export default Signup