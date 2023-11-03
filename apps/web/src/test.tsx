import { ErrorBoundary, Suspense } from "solid-js";
import { Route, useRouteData } from "solid-start";
import { routeData } from "~/test.data";

export function Test() {
  return (
    <Route
      path="/"
      data={routeData}
      component={() => {
        const { data } = useRouteData<typeof routeData>();

        return (
          <ErrorBoundary
            fallback={e => {
              console.log("ERROR BOUNDARY", e);
              return <div>Hydration error: {`${JSON.stringify(e)}`}</div>;
            }}
          >
            <h1>HYDRATION BUG</h1>
            <Suspense fallback={<div>Suspense Fallback</div>}>
              <div>{JSON.stringify(data(), null, 2)}</div>
              <Suspense fallback={<div>FALLBACk</div>}>
                <div>{JSON.stringify(data(), null, 2)}</div>
              </Suspense>
            </Suspense>
          </ErrorBoundary>
        );
      }}
    />
  );
}
