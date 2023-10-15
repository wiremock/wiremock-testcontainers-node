# wiremock-testcontainers-node

WireMock module for [Testcontainers for NodeJS](https://node.testcontainers.org/)

## Usage

```bash
npm install wiremock-testcontainers-node
```

Add a stub mapping json file (eg. `mapping.json`)

```js
import { WireMockContainer } from "wiremock-testcontainers-node";
const container = await new WireMockContainer()
  .withMapping("./mapping.json")
  .withExposedPorts(8080)
  .start();
const { output, exitCode } = await container.exec([
  "curl",
  "http://localhost:8080/hello",
]);

console.log(output);

await container.stop();
```
