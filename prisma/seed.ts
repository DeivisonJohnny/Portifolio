import { db } from "@/app/_lib/prisma";

async function main() {
  // Criando usuários
  const user1 = await db.user.create({
    data: {
      name: "João Silva",
      username: "joaosilva",
      password: "senha123",
    },
    select: {
      id: true,
    },
  });

  // Criando habilidades
  const skill1 = await db.mySkills.create({
    data: {
      icon: "🔧",
      name: "JavaScript",
      myprojectId: "", // Pode ser deixado vazio inicialmente
      myqualityId: "", // Pode ser deixado vazio inicialmente
    },
    select: {
      id: true,
    },
  });

  await db.mySkills.create({
    data: {
      icon: "💻",
      name: "Python",
      myprojectId: "",
      myqualityId: "",
    },
    select: {
      id: true,
    },
  });

  // Criando projetos
  const project1 = await db.myProject.create({
    data: {
      name: "Projeto de Site",
      description: "Um site incrível feito com JavaScript",
      imgUrl: "http://exemplo.com/imagem.jpg",
      yearTo: 2023,
      yearFrom: 2022,
      skills: {
        connect: { id: skill1.id },
      },
    },
    select: {
      id: true,
    },
  });

  // Criando qualidades
  const quality1 = await db.myQuality.create({
    data: {
      title: "Desenvolvedor Web",
      desctiption: "Experiência em desenvolvimento de aplicações web.",
      subject: "Tecnologia",
      languages: {
        connect: { id: skill1.id },
      },
    },
    select: {
      id: true,
    },
  });

  // Criando educação
  const education1 = await db.myEducation.create({
    data: {
      name: "Universidade Exemplo",
      description: "Bacharel em Ciência da Computação",
      yearTo: 2022,
      yearFrom: 2018,
    },
    select: {
      id: true,
    },
  });

  console.log({ user1, project1, quality1, education1 });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.$disconnect();
  });
