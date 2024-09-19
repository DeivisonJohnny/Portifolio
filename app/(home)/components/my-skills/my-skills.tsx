import CardSkill from "./card-skill";

export default function MySkills() {
  return (
    <section className=" w-[100%] flex flex-col items-center py-[50px] gap-[40px] ">
      <div className=" w-[80%] ">
        <h1 className=" w-[100%] text-center text-[40px] gradient-text font-bold  ">
          Minhas Habilidades
        </h1>
        <p className="text-center">
          Colocamos suas ideias e, portanto, seus desejos na forma de um projeto
          web único que inspira você e seus clientes.
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-evenly sm:flex-wrap md:grid-cols-3 lg:grid-cols-5
">
        <CardSkill iconText={"PHP"} porcent="50%" titleBottom="PHP"></CardSkill>
        <CardSkill iconText={"JS"} porcent="50%" titleBottom="JavaScript"></CardSkill>
        <CardSkill iconText={"Mysql"} porcent="20%" titleBottom="MariaDB"></CardSkill>
        <CardSkill iconText={"React"} porcent="50%" titleBottom="React"></CardSkill>
        <CardSkill iconText={"RCN"} porcent="50%" titleBottom="React Native"></CardSkill>
      </div>
    </section>
  );
}
