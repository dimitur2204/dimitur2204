import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { createMemoryHistory } from "@tanstack/react-router";
import { StartServer } from "@tanstack/react-start/server";
import { createRouter } from "./router";

export async function render(url, response) {
  const router = createRouter();

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  });

  router.update({
    history: memoryHistory,
  });

  await router.load();

  const appHtml = ReactDOMServer.renderToString(
    <StartServer router={router} />,
  );

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(`<!DOCTYPE html>${appHtml}`);
}
