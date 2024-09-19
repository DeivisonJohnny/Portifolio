-- CreateTable
CREATE TABLE "MyQuality" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desctiption" TEXT NOT NULL,

    CONSTRAINT "MyQuality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "yearTo" INTEGER NOT NULL,
    "yearFrom" INTEGER NOT NULL,

    CONSTRAINT "MyProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyEducation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "yearTo" INTEGER NOT NULL,
    "yearFrom" INTEGER NOT NULL,

    CONSTRAINT "MyEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MySkills" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "myprojectId" TEXT NOT NULL,

    CONSTRAINT "MySkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MySkills" ADD CONSTRAINT "MySkills_myprojectId_fkey" FOREIGN KEY ("myprojectId") REFERENCES "MyProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
