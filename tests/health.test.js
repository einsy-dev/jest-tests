import healthcheck from "../src/health";

test('should ', () => {
    const obj = { name: "Mac", health: 51 };
    let result = healthcheck(obj);
    expect(result).toEqual("healthy");
})

