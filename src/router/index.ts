import express from "express";
import { Router } from "express";
import { ReferRouters } from "../app/modules/refer/refer.router";

const router = express.Router();

export interface ReferRouter {
  path: string;
  route: Router;
}

const routers: ReferRouter[] = [
  {
    path: "/refer",
    route: ReferRouters,
  },
];

routers.forEach((route: ReferRouter) => router.use(route.path, route.route));
export default router;
