const server = require("./server");

const port = 9000;

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is alive!" });
});

server.listen(port, () => {
  console.log(`=== Server listening on port ${port} ===`);
});
