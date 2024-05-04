import { FetchCreateContextFnOptions, fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";

const handler = (req: Request) => {
  console.log(`Incoming Request: ${req.url}`)
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: (opts: FetchCreateContextFnOptions): object | Promise<object> => ({}),
  });
}

export { handler as GET, handler as POST };