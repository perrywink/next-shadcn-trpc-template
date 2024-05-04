import { ClientFetchExample } from "@/components/tmp/client-fetch-example";
import { ServerFetchExample } from "@/components/tmp/server-fetch-example";

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <ClientFetchExample />
      <ServerFetchExample />
    </main>
  );
}
