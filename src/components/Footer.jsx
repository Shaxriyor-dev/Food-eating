import React from 'react'
import polya from "../assets/icon/polya.png";

function Footer() {
  return (
    <div className='w-full h-[80px] bg-[#00111A]  flex items-center justify-between px-16'>
        <a className='text-[25px] text-[#4D585E] font-[Roboto] flex items-center gap-5 ' href="/">
           <img src={polya} alt="polya" />    Food explorer
        </a>
        <p className="text-[17px] font-[Roboto] text-[#4D585E]">© 2023 - Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer