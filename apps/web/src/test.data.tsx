import { createRouteData } from "solid-start";

export function routeData() {
  const data = createRouteData(async () => {
    const response = await fetch("https://rickandmortyapi.com/graphql", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query Query1 {
          characters {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              status
            }
          }
        }`,
      }),
      method: "POST",
    });

    return await response.json();
  });

  return { data };
}
