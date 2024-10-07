import CardExperience from "./card-experience";

export default function MyExperience() {
  return (
    <section className="flex flex-row items-center justify-between flex-wrap w-[100%] px-[10%] py-[100px] bg-[#050709] max-lg:flex-col max-lg:gap-[60px] max-lg:w-[100%] ">
      <div className=" w-[50%]  max-lg:w-[100%] flex items-center flex-col gap-6 ">
        <h1 className=" w-[80%] max-lg:w-[100%] text-[40px] font-bold gradient-text mb-2 ">
          Minha Experiencia
        </h1>
        <CardExperience
          yearInit="2024"
          yearEnd="Atuando"
          title="Policia Civil"
          subTitle="Estágio"
        ></CardExperience>
        <CardExperience
          yearInit="2023"
          yearEnd="2024"
          title="Jirituba Avaliações"
          subTitle="Aplicativo avaliação para pousada"
        ></CardExperience>
      </div>
      <div className=" w-[50%]  max-lg:w-[100%] flex items-center flex-col gap-6 ">
        <h1 className=" w-[80%] max-lg:w-[100%] text-[40px] font-bold gradient-text mb-2 ">
          Minha Educação
        </h1>
        <CardExperience
          yearInit="2021"
          yearEnd="Cursando"
          title="Desenvolvimento de Sistema"
          subTitle="Universidade Cesmac"
        ></CardExperience>
        <CardExperience
          yearInit="2021"
          yearEnd="2022"
          title="Curso Front - End"
          subTitle="Cursos Abertos"
        ></CardExperience>
      </div>
    </section>
  );
}
