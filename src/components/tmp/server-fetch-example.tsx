import { serverClient } from "@/app/_trpc/trpc-server-client";

export async function ServerFetchExample() {
  const data = await serverClient.helloWorld()

  return (
    <div>
      {data}
    </div>
  );
}
