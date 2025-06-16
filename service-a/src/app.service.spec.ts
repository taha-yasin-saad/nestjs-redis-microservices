import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";
import { ClientProxy } from "@nestjs/microservices";
import { of } from "rxjs";

describe("AppService (service-a)", () => {
  let service: AppService;
  let clientProxyMock: ClientProxy;

  beforeEach(async () => {
    clientProxyMock = {
      send: jest.fn(() => of(10)), // mock doubling response
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: "MATH_SERVICE", useValue: clientProxyMock },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should call client.send and return the doubled number", async () => {
    const result = await service.double(5);
    expect(result).toBe(10);
    expect(clientProxyMock.send).toHaveBeenCalledWith("double", 5);
  });
});
