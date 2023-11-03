// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Scripts,
  Title,
  Link,
  Meta,
  Routes,
} from "solid-start";

import { Test } from "~/test";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Sandbox</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <Test />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
