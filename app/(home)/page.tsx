import * as React from "react";
import Header from "./components/header";
import Presentation from "./components/presentation";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "var(--background)" }}
      className="flex items-center justify-center flex-col  w-[100%] 2xl:w-[1500px]"
    >
      <Header></Header>
      <main className=" w-[100%] custom-background custom-background-bottom-left ">
        <Presentation></Presentation>
      </main>
    </div>
  );
}
