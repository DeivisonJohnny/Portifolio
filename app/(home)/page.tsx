import * as React from "react";
import Header from "./components/header/header";
import Presentation from "./presentation";
import MyQuality from "./my-quality";
import Contributions from "./contributions";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "var(--background)" }}
      className="flex items-center justify-center flex-col  w-[100%] "
    >
      <Header></Header>
      <main className="flex items-center flex-col w-[100%]">
        <Presentation></Presentation>
        <MyQuality></MyQuality>
        <Contributions></Contributions>
      </main>
    </div>
  );
}
