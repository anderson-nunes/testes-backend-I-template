describe("Praticando com Jest", () => {
  test("100 deve ser maior que 99", () => {
    expect(100).toBeGreaterThan(99);
  });

  // test("100 deve ser menor que 99", () => {
  //   expect(100).toBeLessThan(99);
  // });

  test("toBe = dados primitivos", () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(true).not.toBeFalsy();
  });

  test("toEqual = objetos e arrays", () => {
    expect(true).toEqual(true);
    expect([]).toEqual([]);
  });

  test("toContain e toContainEqual", () => {
    const users = ["Ciclano", "Beltrana"]; // array de dados primitivos (strings)

    const posts = [
      { id: "p001", content: "oi" },
      { id: "p002", content: "bananinha" },
    ]; // array de objetos

    expect(users).toContain("Beltrana");
    expect(posts).toContainEqual({ id: "p001", content: "oi" });
  });

  test("toHaveLength", () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect("abc").toHaveLength(3);
    expect("").not.toHaveLength(5);
  });
});
