import app from "./app.js";
import config from "./config/index.js";
import { prisma } from "./lib/prisma.js";




const port = config.port;

async function main(){
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.error("Error connecting to database:", error);
         await prisma.$disconnect();
         process.exit(1);
    }
}

main();