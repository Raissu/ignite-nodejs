import express from "express";
import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

//config
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`server running in port: ${PORT}`);
});
