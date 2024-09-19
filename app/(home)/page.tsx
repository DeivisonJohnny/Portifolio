import * as React from "react";
import Header from "./components/header/header";
import Presentation from "./components/presentation";
// import MyQuality from "./my-quality";
import Contributions from "./components/my-contributions/contributions";
import MyQuality from "./components/my-quality/my-quality";
import MyExperience from "./components/my-experience/experience";
import MySkills from "./components/my-skills/my-skills";

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
        <MyExperience></MyExperience>
        <MySkills></MySkills>
      </main>
    </div>
  );
}
