const server = require("./server");
const router = require("./router/projects");
const projectRouter = require("./router/projects");
const resourceRouter = require("./router/resources");
const taskRouter = require("./router/tasks");

const port = 9000;

router.use("/api/projects", projectRouter);
router.use("/api/resources", resourceRouter);
router.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is alive!" });
});

server.listen(port, () => {
  console.log(`=== Server listening on port ${port} ===`);
});
