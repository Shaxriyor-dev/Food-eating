import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Selexct from "./Selexct.jsx";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import dish from "../assets/imgs/Dish.png";
import dish1 from "../assets/imgs/Dish1.png";
import Plus from "../assets/icon/Plus.png";
import Minus from "../assets/icon/Minus.png";
import sir from "../assets/imgs/sir.png";
import loop from "../assets/imgs/lopp.png";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import sariq from "../assets/imgs/sariq.png";

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { cound, Setcound } = useState(0);
  return (
    <div>
      <Navbar />
      <Selexct />
      <section className="h-[100vh] bg-[#000a0f] text-white flex justify-center items-center">
        <div>
          <p className="text-[32px] text-[#E1E1E6] py-8">Refeições</p>
          <div className="flex items-center gap-5">
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Spaguetti Gambe
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 79,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish1} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Torradas de Parma
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 25,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Spaguetti Ravenela
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 40,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish1} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Spaguetti Gambe
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 79,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-[#000a0f] text-white flex justify-center items-center">
        <div>
          <p className="text-[32px] text-[#E1E1E6] py-8">Sobremesas</p>
          <div className="flex items-center gap-5">
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={sir} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Suco de maracujá
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Suco de maracujá gelado, docinho.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 30 , 10
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={loop} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Torradas de Parma
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 25,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={sir} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Suco de maracujá
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Suco de maracujá gelado, docinho.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 30 , 10
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={loop} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Torradas de Parma
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 25,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-[#000a0f] text-white flex justify-center items-center">
        <div>
          <p className="text-[32px] text-[#E1E1E6] py-8">Bebidas</p>
          <div className="flex items-center gap-5">
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Spaguetti Gambe
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 79,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={sariq} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Torradas de Parma
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 25,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={dish} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Spaguetti Gambe
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 79,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[462px] bg-[#00070A] rounded-[10px] p-2">
              <div className="flex justify-end p-2">
                <Checkbox
                  {...label}
                  icon={
                    <FavoriteBorder sx={{ color: "#fff", fontSize: "28px" }} />
                  }
                  checkedIcon={<Favorite sx={{ fontSize: "28px" }} />}
                />
              </div>
              <div className="flex justify-center">
                <img src={sariq} alt="" />
              </div>
              <p className="text-2xl font-bold font-[Poppins] text-center p-2">
                Torradas de Parma
              </p>
              <p className="font-[Poppins] text-[#C4C4CC] text-[14px] text-center p-1">
                Massa fresca com camarões e pesto.{" "}
              </p>
              <p className="text-[32px] text-[#82F3FF] font-[Roboto] text-center">
                R$ 25,97
              </p>
              <div className="flex justify-between items-center p-5 py-9">
                <div className="flex items-center gap-4.5">
                  <button>
                    <img src={Minus} alt="Mius" />
                  </button>
                  <span className="text-[20px] font-bold font-[Roboto]">
                    {cound} 0
                  </span>
                  <button>
                    <img src={Plus} alt="Plus" />
                  </button>
                </div>
                <div>
                  <button onClick={handleClick}>
                    <AddShoppingCartIcon sx={{ fontSize: "28px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your purchase has been added to your card !
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}

export default Home;
