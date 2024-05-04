// Use this file as a template for how to make queries from client components
// Can be deleted later on
"use client"

import { trpc } from "@/app/_trpc/trpc-client";

export function ClientFetchExample() {
  const helloWorld = trpc.helloWorld.useQuery();

  return (
    <div>
      {helloWorld.data}
    </div>
  );
}
