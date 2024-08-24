import { Route, Router } from "@tanstack/react-router";

import { rootRoute } from "./Root";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/work",
  component: WorkPage,
});
// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

export default router;
