import MyQualityItem from "./my-quality-item";
const skillsFront = [
  { key: "as", title: "HTML/CSS" },
  { key: "f", title: "React" },
  { key: "as4", title: "React Native" },
  { key: "5sd", title: "Tailwind" },
  { key: "asd00", title: "Antd Design" },
  { key: "8769", title: "React Native Peper" },
]


const skillsBack = [
  { key: "as5", title: "PHP" },
  { key: "f5", title: "NodeJs" },
  { key: "asd005", title: "Java" },
  { key: "87695", title: "MongoDB" },
  { key: "87697567", title: "API Rest, RestFull" },
  { key: "as45", title: "Prisma ORM" },
  { key: "5sd5", title: "Paradigma POO" },
]

const skillsSGB = [
  { key: "as2", title: "MongoDB" },
  { key: "f2", title: "Mysql" },
  { key: "as42", title: "Postgrel" },
  { key: "5sd2", title: "DB Relacionais" },
  { key: "asd002", title: "DB Não Relacionais" },
]

const skillsSoft = [
  { key: "as99", title: "Trabalho em Equipe" },
  { key: "f99", title: "Aprendizagem rápido" },
  { key: "as499", title: "Auto Adaptável" },
  { key: "5sd99", title: "Comunicação" },
]


function MyQuality() {
  return (
    <section className="py-[50px] bg-black w-full" id="quality">
      <article className=" px-4 ">
        <div className="flex items-center flex-col gap-1 py-4 ">
          <h1 className=" gradient-text text-[35px] font-bold text-center  tracking-wider">
            Minhas Qualidades
          </h1>
          <p className=" text-center ">
            Desenvolvedor em início de carreira, apaixonado por tecnologia e
            pronto para aprender e crescer em novos desafios. Em busca da
            oportunidade certa para contribuir e evoluir.
          </p>
        </div>
        <ul className=" my-10 flex flex-col items-center ">
          <MyQualityItem
            nuOrder={1}
            title="Front-End"
            text="Habilidade em transformar designs em projetos reais utilizando as ferramentas mais atuais do mercado."
            list={skillsFront}
            />
          <MyQualityItem
            nuOrder={2}
            title="Back End"
            text="Competência em implementar algoritmos e lógica de negócio em aplicações do lado do servidor, com eficiência, escalabilidade e segurança."
            list={skillsBack}
            
          />
          <MyQualityItem
            nuOrder={3}
            title="Banco de Dados"
            text="Habilidade em trabalhar com diversos bancos de dados, tanto relacionais quanto não relacionais."
            list={skillsSGB}
          />
          <MyQualityItem
            nuOrder={4}
            title="Auto Adaptavel"
            text="Possuo a capacidade de me adaptar rapidamente a novas tecnologias e metodologias, garantindo uma integração eficiente em ambientes dinâmicos e em constante evolução."
            list={skillsSoft}
          />
        </ul>
      </article>
    </section>
  );
}

export default MyQuality;
