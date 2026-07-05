-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "project_name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "techStack" TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,
    "live_Url" TEXT NOT NULL,
    "github_Url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
