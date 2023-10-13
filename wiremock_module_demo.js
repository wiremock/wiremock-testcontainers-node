import { GenericContainer } from "testcontainers";
const mapping = {
  request: {
    method: "GET",
    url: "/hello",
  },

  response: {
    status: 200,
    body: "Hello, world!",
  },
};

const container = await new GenericContainer("wiremock/wiremock")
  .withExposedPorts(8080)
  .start();

const { output, exitCode } = await container.exec([
  "curl",
  "http://localhost:8080/hello",
]);

console.log(output);

await container.stop();
