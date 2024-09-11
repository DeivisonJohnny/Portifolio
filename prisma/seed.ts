import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // URLs de imagens fictícias
    const images = [
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
      "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
      "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
      "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
      "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
      "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
      "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
      "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
      "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
    ];

    // Nomes criativos para os projetos
    const projectNames = [
      "Projeto A",
      "Projeto B",
      "Projeto C",
      "Projeto D",
      "Projeto E",
      "Projeto F",
      "Projeto G",
      "Projeto H",
      "Projeto I",
      "Projeto J",
    ];

    // Skills fictícias
    const skills = [
      { name: "JavaScript", experience: 4.5 },
      { name: "TypeScript", experience: 3.0 },
      { name: "React", experience: 4.0 },
      { name: "Node.js", experience: 4.2 },
      { name: "GraphQL", experience: 2.8 },
      { name: "CSS", experience: 3.5 },
      { name: "HTML", experience: 4.0 },
      { name: "Python", experience: 3.8 },
      { name: "Django", experience: 3.6 },
      { name: "Ruby on Rails", experience: 2.9 },
    ];

    // Dados fictícios para usuários
    const users = [
      { name: "Alice", password: "password123" },
      { name: "Bob", password: "password456" },
      { name: "Charlie", password: "password789" },
      { name: "Diana", password: "password012" },
      { name: "Edward", password: "password345" },
    ];

    // Criar usuários
    for (const user of users) {
      await prisma.user.create({
        data: {
          name: user.name,
          password: user.password,
        },
      });
    }

    // Criar 10 projetos com nomes e imagens fictícias
    for (let i = 0; i < 10; i++) {
      const projectName = projectNames[i];
      const imgBackground = images[i];

      // Criar o projeto
      const project = await prisma.projects.create({
        data: {
          name: projectName,
          link: `https://example.com/${projectName.replace(/\s+/g, '-').toLowerCase()}`,
          imgBackground,
        },
      });

      // Atribuir skills aos projetos
      for (const skill of skills) {
        await prisma.skills.create({
          data: {
            name: skill.name,
            experience: skill.experience,
            projectId: project.id,
          },
        });
      }
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os dados:", error);
  }
}

seedDatabase();
