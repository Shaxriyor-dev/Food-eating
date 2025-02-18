import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import rk from "../assets/imgs/rus.png";
import Input from "../components/Input.jsx";
import fors from '../assets/imgs/fors.png';
import { useState } from "react";
import sigs from '../assets/imgs/Sigs.png';
import {Link} from 'react-router';

function Navbar() {
  const [count , Setcount] = useState(0)
  return (
    <div>
      <nav className="bg-[#00111A] text-white w-full flex justify-center p-5 items-center gap-13">
        <a
          className="flex items-center gap-5 text-2xl font-bold  font-[Poppins]"
          href="/"
        >
          <img src={rk} alt="" />
          Food explorer
        </a>
        <Input />
        <div className="flex items-center gap-8">
          <Box  sx={{ "& button": { m: 1 } }}>
            <div>
              <Button onClick={()=> window.location.pathname = '/create'} sx={{ fontFamily : 'Roboto' , fontSize : '16px' ,  height : '56px' , width : '216px' , background : '#750310' , gap : '5px' , justifyContent : 'center' , alignItems : 'center' , display : 'flex'}} variant="contained" size="large">
               <img src={fors} alt="" />    Pedidos <span> {count}</span>
              </Button>
            </div>
          </Box>
             <Link to={'/login'} ><img src={sigs} alt="" /></Link>
        </div>
      </nav>
        
    </div>
  );
}

export default Navbar;
