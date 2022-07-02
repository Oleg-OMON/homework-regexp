import Validator from "../app";

test("correct phone", () => {
    const validator = new Validator();
    const received = validator.validity("8 (927) 000-00-00");
    expect(received).toBe("+79270000000");
});

test("correct phone", () => {
  const validator = new Validator(); 
  const received = validator.validity("+7 960 000 00 00");
  expect(received).toBe("+79600000000");
});

test("correct phone", () => {
    const validator = new Validator(); 
  const received = validator.validity("+86 000 000 0000");
  expect(received).toBe("+860000000000");
});

// Вариация
test.each([
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
])("%p", (phone, expected) => {
    const validator = new Validator();
  expect(validator.validity(phone)).toEqual(expected);
});