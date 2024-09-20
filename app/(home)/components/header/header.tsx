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
import Link from "next/link";

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
    <header className="flex justify-between p-5 w-full 2xl:w-[1500px]  custom-background backdrop-blur-sm z-[2] ">
      <h1 className="text-2xl font-semibold w-[195px]">
        &lt; Dev Johnny /&gt;
      </h1>
      <div className="flex w-[70%] justify-end gap-6 max-lg:w-fit">
        {isLargeScreen ? (
          <>
            <NavLink href="#project">Projetos</NavLink>
            <NavLink href="#experiencia">Experiência</NavLink>
            <NavLink href="#habilidades">Habilidades</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <NavLink
              href="../login/"
              className="px-6 border-0 rounded-full hover:border-[#00000000] bg-gradient-to-r from-[#2E175B] to-[#824DEF]"
            >
              Login
            </NavLink>
          </>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger style={{ border: "none", outline: 0 }}>
              <MenuOutlined style={{ fontSize: 20, width: 40 }} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navegue</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="">Projeto</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="">Experiencia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="">Habilidades</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="">Contato</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink href="../login/">Login</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
