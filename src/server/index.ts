import { publicProcedure, router } from "./trpc";
import prisma from "@/db/prisma-client"

export const appRouter = router({
  // test endpoint
  helloWorld: publicProcedure.query(async () => {
    return "hello world!"
  }),
})

export type AppRouter = typeof appRouter;