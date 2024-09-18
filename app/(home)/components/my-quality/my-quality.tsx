import MyQualityItem from "./components/my-quality/my-quality-item";

function MyQuality() {
  return (
    <section className="py-[50px] bg-black w-full">
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
            title="Front End"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus assumenda nihil aliquid adipisci consequatur dignissimos tenetur."
          ></MyQualityItem>
          <MyQualityItem
            nuOrder={2}
            title="Front End"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus assumenda nihil aliquid adipisci consequatur dignissimos tenetur."
          ></MyQualityItem>
          <MyQualityItem
            nuOrder={3}
            title="Back End"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus assumenda nihil aliquid adipisci consequatur dignissimos tenetur."
          ></MyQualityItem>
          <MyQualityItem
            nuOrder={4}
            title="Banco de Dados"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus assumenda nihil aliquid adipisci consequatur dignissimos tenetur."
          ></MyQualityItem>
        </ul>
      </article>
    </section>
  );
}

export default MyQuality;
