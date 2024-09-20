import CardJobs from "./card-jobs";

export default function Contributions() {
  return (
    <section className=" w-[100%] flex items-center flex-col py-[60px] bg-[#0f0715] " id="project">
      <article>
        <h1 className=" text-[45px] gradient-text font-bold ">Meu projetos</h1>
        <p >Esses são os meus projetos pessoais</p>
      </article>
      <div className=" w-[100%] flex flex-col items-center justify-evenly gap-4  py-14 px-4 ">
        <div className=" w-[80%]  flex justify-evenly items-center max-lg:flex-col gap-9">
          <CardJobs id="contato"
            titleCard="Jirituba Avaliações"
            descriptionCard="Aplicativo Mobile de avaliações de atendimento de uma pousada"
            nameImg={"project2.jpg"}
          ></CardJobs>
            <CardJobs id="sadads"
            titleCard="Meu Portifólio"
            descriptionCard="Aplicativo Mobile de avaliações de atendimento de uma pousada"
            nameImg={"project1.jpg"}
          ></CardJobs>
        </div>
      </div>
    </section>
  );
}
