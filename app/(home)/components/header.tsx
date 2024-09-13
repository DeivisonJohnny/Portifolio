"use client";
import * as React from "react";
import NavLink from "./link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuOutlined } from "@ant-design/icons";

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1000);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className="flex justify-between p-5 w-full">
      <h1 className="text-2xl font-semibold w-[195px]">
        {" "}
        &lt; Dev Johnny /&gt;{" "}
      </h1>
      <div className="flex w-[70%] justify-end gap-6">
        {isLargeScreen ? (
          <>
            <NavLink href="#projetos">Projetos</NavLink>
            <NavLink href="#experiencia">Experiência</NavLink>
            <NavLink href="#habilidades">Habilidades</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <NavLink
              href="#login"
              className="px-6 border-b-0 hover:border-[#00000000] rounded-full bg-gradient-to-r from-[#2E175B] to-[#824DEF]"
            >
              Login
            </NavLink>
          </>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuOutlined style={{ fontSize: 20, width: 40 }} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navegue</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="">Projeto</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="">Experiencia</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="">Habilidades</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="">Contato</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
