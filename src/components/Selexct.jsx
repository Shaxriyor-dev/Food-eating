import React from 'react'
import Mask from '../assets/imgs/Mask.png';

function Selexct() {
  return (
    <div className='h-[600px] bg-[#000a0f] text-white flex justify-center items-center'>
        <div className='flex  items-center  justify-center p-15 bg-[#091E26] h-[300px] rounded-2xl'>
                  <img src={Mask} alt="" />
             <div>
                 <p className='text-[40px] font-[Poppins] font-[500]'>Sabores inigualáveis</p>
                 <p className='font-[Poppins] text-[17px]'>Sinta o cuidado do preparo com ingredientes selecionados</p>
             </div>
        </div>
    </div>
  )
}

export default Selexct