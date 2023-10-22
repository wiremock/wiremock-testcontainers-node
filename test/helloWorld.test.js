import { test, expect } from "vitest";
import { WireMockContainer } from "../src/WireMockContainer";

test("Hello World test", async () => {
  const container = await new WireMockContainer()
    .withMapping("./src/mappings/hello_world.json")
    .withExposedPorts(8080)
    .start();
  const { output, exitCode } = await container.exec([
    "curl",
    "http://localhost:8080/hello",
  ]);

  expect(output).toBe("Hello, world!");
  await container.stop();
}, 100000);
