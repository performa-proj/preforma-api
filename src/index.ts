import { initServer } from "./initServer";

// DEFINITIONS
const port = 3100;

// INITIATION
const server = initServer();

server.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
