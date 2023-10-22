import { GenericContainer, StartedTestContainer, AbstractStartedContainer } from "testcontainers";
export class WireMockContainer extends GenericContainer {
  constructor() {
    super("wiremock/wiremock");
  }
  public withMapping(mapping: string): this {
    super.withCopyFilesToContainer([
      {
        source: mapping,
        target: "/home/wiremock/mappings/hello_world.json",
      },
    ]);
    return this;
  }
  public override async start(): Promise<StartedWireMockContainer> {
    return new StartedWireMockContainer(await super.start());
  }
}
export class StartedWireMockContainer extends AbstractStartedContainer {
  constructor(startedTestContainer: StartedTestContainer) {
    super(startedTestContainer);
  }
  public withMapping(mapping: string): this {
    super.copyFilesToContainer([
      {
        source: mapping,
        target: "/home/wiremock/mappings/hello_world.json",
      },
    ]);
    return this;
  }
}
