import { pratica2 } from "../src/pratica2";

describe("Testando pratica 2", () => {
  test("deve retornar true se receber número inteiro par", () => {
    const result = pratica2(10);
    expect(result).toBe(true);
  });

  test("deve retornar false se receber número inteiro ímpar", () => {
    const result = pratica2(11);
    expect(result).toBe(false);
  });

  test("deve retornar null se receber parametro diferente de number", () => {
    const result = pratica2("2" as any);
    expect(result).toBeNull();
    expect(result).toBe(null);
    expect(result).toEqual(null);
  });

  test("deve retornar false se receber número não-inteiro", () => {
    const result = pratica2(2.2);
    expect(result).toBeNull();
  });
});
