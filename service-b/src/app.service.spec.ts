import { AppService } from "./app.service";

describe("AppService (service-b)", () => {
  let service: AppService;

  beforeEach(() => {
    service = new AppService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return the double of a number", () => {
    const result = service.handleDouble(6);
    expect(result).toBe(12);
  });

  it("should return the square of a number", () => {
    const result = service.square(4);
    expect(result).toBe(16);
  });
});
