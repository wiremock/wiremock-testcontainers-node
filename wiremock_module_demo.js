import { GenericContainer } from "testcontainers";
const container = await new GenericContainer("wiremock/wiremock")
  .withExposedPorts(8080)
  .withCopyFilesToContainer([
    {
      source: "./mappings/hello_world.json",
      target: "/home/wiremock/mappings/hello_world.json",
    },
  ])
  .start();

// const { output, exitCode } = await container.exec(["pwd"]);
// const { output, exitCode } = await container.exec(["ls", "mappings", "-al"]);

// const { output, exitCode } = await container.exec([
//   "curl",
//   "http://localhost:8080/__admin/mappings",
// ]);
const { output, exitCode } = await container.exec([
  "curl",
  "http://localhost:8080/hello",
]);

console.log(output);

await container.stop();
