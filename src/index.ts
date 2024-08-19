import type { Express } from "express";
import express from "express";
import { helloRouter } from "./router/hello";
import { playerRouter } from "./router/player_router";

const app: Express = express();
const port = 3000;

app.use("/hello", helloRouter);
app.use("/players", playerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
