import * as React from "react";
import Image from "next/image";
import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

export default function Presentation() {
  return (
    <section className="  relative transition duration-100 ease-in-out  flex justify-around flex-col px-3 py-10 w-[100%] h-[90vh] max-lg:h-[100%]  2xl:w-[1500px] ">
      <div className=" h-[100%] w-[100%] flex items-center justify-between max-lg:flex-col ">
        <div className="flex flex-col  justify-center gap-4 leading-tight w-[50%] h-[100%] px-4 max-lg:w-[100%] ">
          <h1 className="text-3xl font-bold">Eu sou Johnny</h1>
          <h2 className="gradient-text text-[65px] font-bold tracking-wider">
            Web FullStack + <br />
            Mobile
          </h2>
          <p className="leading-normal text-[17px] my-3 max-lg:hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            amet, architecto necessitatibus ab nisi libero est sed, deserunt
            mollitia maxime distinctio! A expedita autem fugit veniam odit
            deserunt quas dolore!
          </p>
          <div className=" w-[100%] flex items-center justify-start gap-5 max-lg:hidden">
            <button className=" p-3 px-5 transition duration-300 bg-[#8850f700] rounded-3xl border-[1px] border-[#8750f7] text-[13px] font-medium text-[#8750f7]  hover:bg-[#8750f7] hover:text-[white] ">
              Download CV
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <GithubFilled style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <LinkedinFilled style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <InstagramOutlined style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
          </div>
        </div>
        <div className="  w-[50%] h-[100%] flex items-center justify-center flex-col max-lg:w-[100%] ">
          <div className="w-[55%] flex items-center justify-center rounded-[21px] relative border-[2px] border-[#2a1454] rounded-custom transition-all duration-300 rotate-[4.5deg] hover:rotate-0 hover:border-[#8750f7] max-lg:w-[40%] m-9">
            <Image
              className="filter grayscale rounded-[20px]"
              src={require("./../public/img/eu.jpg")}
              alt="Minha foto"
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div className=" w-[80%] hidden  items-center justify-evenly gap-5  max-lg:flex  ">
            <button className=" p-3 px-5 transition duration-300 bg-[#8850f700] rounded-3xl border-[1px] border-[#8750f7] text-[13px] font-medium text-[#8750f7]  hover:bg-[#8750f7] hover:text-[white] ">
              Download CV
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <GithubFilled style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <LinkedinFilled style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
            <button className=" relative transition duration-300 transform translate-y-0 hover:translate-y-[-10px] ">
              <InstagramOutlined style={{ color: "#8750f7", fontSize: 25 }} />
            </button>
          </div>

          <p className=" w-[80%] leading-normal hidden text-[18px] my-[40px] max-lg:flex font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            amet, architecto necessitatibus ab nisi libero est sed, deserunt
            mollitia maxime distinctio! A expedita autem fugit veniam odit
            deserunt quas dolore!
          </p>
        </div>
      </div>
        <div className="w-full flex flex-row justify-between max-lg:grid grid-cols-2 gap-5 px-3 ">
          <div className="flex gap-2 items-center justify-center ">
            <p className="text-[52px] font-semibold">2</p>
            <p className="text-[15px]">
              Anos de <br />
              Experiência
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <p className="text-[52px] font-semibold">10+</p>
            <p className="text-[15px]">
              Contribuições <br />
              Projetos
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <p className="text-[52px] font-semibold">3</p>
            <p className="text-[15px]">
              Empresas <br /> contribuidas
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <p className="text-[52px] font-semibold">13</p>
            <p className="text-[15px]">
              Repositorios no <br />
              Github
            </p>
          </div>
        </div>
    </section>
  );
}
