import * as React from "react";
import NavLink from "./link";

export default function Header() {
  return (
    <header className="   flex justify-around p-5 w-[100%] ">
      <h1 className="text-2xl font-semibold  w-[192px] ">
        {" "}
        &lt; Dev Johnny /&gt;{" "}
      </h1>
      <div className="flex w-[40%] justify-evenly gap-6">
        <NavLink href="#projetos">Projetos</NavLink>
        <NavLink href="#experiencia">Experiência</NavLink>
        <NavLink href="#habilidades">Habilidades</NavLink>
        <NavLink href="#contato">Contato</NavLink>
        <NavLink
          href="#login"
          className=" px-6 border-b-0  border-[#48297e00]  rounded-full bg-gradient-to-r  from-[#2E175B]  to-[#824DEF]"
        >
          Login
        </NavLink>
      </div>
    </header>
  );
}

