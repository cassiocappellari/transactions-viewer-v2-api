import express from "express";
import cors from 'cors';
import { router } from "./routes";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

const app = express();
const port = 3000;
const schema = makeExecutableSchema({ resolvers, typeDefs });

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(port, () => console.log(
  `Server started at http://localhost:${port}`
));