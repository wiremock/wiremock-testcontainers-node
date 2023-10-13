import { GenericContainer, AbstractStartedContainer } from "testcontainers";
class WireMockContainer extends GenericContainer {
  constructor() {
    super("wiremock/wiremock");
  }
  withMapping(mapping) {
    super.withCopyFilesToContainer([
      {
        source: mapping,
        target: "/home/wiremock/mappings/hello_world.json",
      },
    ]);
    return this;
  }
  async start() {
    return new StartedWireMockContainer(await super.start());
  }
}
class StartedWireMockContainer extends AbstractStartedContainer {
  constructor(startedTestContainer) {
    super(startedTestContainer);
  }

  withMapping(mapping) {
    super.withCopyFilesToContainer([
      {
        source: mapping,
        target: "/home/wiremock/mappings/hello_world.json",
      },
    ]);
    return this;
  }
}

export { WireMockContainer, StartedWireMockContainer };
