import { prisma } from "../../lib/prisma"
import { IProject } from "./project.interface"

const postProjectInDB =async (payload:IProject)=>{
   const postProject = await prisma.projects.create({
    data:  payload
   });

   return postProject;
}

const getProjectInDB = async ()=>{
   const result = await prisma.projects.findMany({
      orderBy: {
         order: "desc"
      }
   })

   return result
}


export const projectService = {
   postProjectInDB,
   getProjectInDB
}