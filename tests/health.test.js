import healthcheck from "../src/health";

test('', () => {
    const obj = { name: "Mac", health: 51 };
    let result = healthcheck(obj);
    expect(result).toEqual("healthy");
});

test('', () => {
    const obj = { name: "Mac", health: 50 };
    let result = healthcheck(obj);
    expect(result).toEqual("wounded");
});

test('', () => {
    const obj = { name: "Mac", health: 15 };
    let result = healthcheck(obj);
    expect(result).toEqual("critical");
});